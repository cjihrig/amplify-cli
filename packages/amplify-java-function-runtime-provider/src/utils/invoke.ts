import execa from 'execa';
import path from 'path';
import { InvocationRequest } from 'amplify-function-plugin-interface';
import { packageName, relativeShimJarPath } from './constants';
import { pathManager } from 'amplify-cli-core';

export const invokeResource = async (request: InvocationRequest, context: any) => {
  const [handlerClassName, handlerMethodName] = request.handler.split('::');

  const childProcess = execa(
    'java',
    [
      '-jar',
      path.join(pathManager.getAmplifyPackageLibDirPath(packageName), relativeShimJarPath),
      path.join(request.srcRoot, 'build', 'libs', 'latest_build.jar'),
      handlerClassName,
      handlerMethodName,
    ],
    {
      input: request.event,
      env: request.envVars,
      extendEnv: false,
      stderr: 'inherit',
      stdout: 'inherit',
    },
  );
  childProcess.stdout.pipe(process.stdout);

  const { stdout, exitCode } = await childProcess;
  if (exitCode !== 0) {
    throw new Error(`java failed, exit code was ${exitCode}`);
  }
  const lines = stdout.split('\n');
  const lastLine = lines[lines.length - 1];
  let result = lastLine;
  try {
    result = JSON.parse(lastLine);
  } catch (err) {
    context.print.warning('Could not parse function output as JSON. Using raw output.');
  }
  return result;
};
