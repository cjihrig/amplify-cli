const { FeatureFlags } = require('amplify-cli-core');
const latestTranslateRegions = FeatureFlags.getBoolean('latestRegionSupport.translate');
const latestTranscribeRegions = FeatureFlags.getBoolean('latestRegionSupport.transcribe');
const latestRekognitionRegions = FeatureFlags.getBoolean('latestRegionSupport.rekognition');
const latestTextractRegions = FeatureFlags.getBoolean('latestRegionSupport.textract');
const latestComprehendRegions = FeatureFlags.getBoolean('latestRegionSupport.comprehend');

const Translate = {
  'us-east-1': 'us-east-1',
  'us-east-2': latestTranslateRegions ? 'us-east-2' : 'us-east-1',
  'us-west-2': 'us-west-2',
  'ca-central-1': 'ca-central-1',
  'eu-west-1': 'eu-west-1',
  'eu-west-2': latestTranslateRegions ? 'eu-west-2' : 'eu-west-1',
  'eu-central-1': 'eu-central-1',
  'ap-northeast-1': 'ap-northeast-1',
  'ap-northeast-2': 'ap-northeast-2',
  'ap-southeast-1': 'ap-southeast-1',
  'ap-southeast-2': latestTranslateRegions ? 'ap-southeast-2' : 'ap-southeast-1',
  'ap-south-1': 'ap-south-1',
};

const Polly = {
  'us-east-1': 'us-east-1',
  'us-east-2': 'us-east-2',
  'us-west-2': 'us-west-2',
  'ca-central-1': 'ca-central-1',
  'eu-west-1': 'eu-west-1',
  'eu-west-2': 'eu-west-2',
  'eu-central-1': 'eu-central-1',
  'ap-northeast-1': 'ap-northeast-1',
  'ap-northeast-2': 'ap-northeast-2',
  'ap-southeast-1': 'ap-southeast-1',
  'ap-southeast-2': 'ap-southeast-2',
  'ap-south-1': 'ap-south-1',
};

const Transcribe = {
  'us-east-1': 'us-east-1',
  'us-east-2': 'us-east-2',
  'us-west-2': 'us-west-2',
  'ca-central-1': 'ca-central-1',
  'eu-west-1': 'eu-west-1',
  'eu-west-2': 'eu-west-2',
  'eu-central-1': 'eu-central-1',
  'ap-northeast-1': latestTranscribeRegions ? 'ap-northeast-1' : 'ap-northeast-2',
  'ap-northeast-2': 'ap-northeast-2',
  'ap-southeast-1': 'ap-southeast-1',
  'ap-southeast-2': 'ap-southeast-2',
  'ap-south-1': 'ap-south-1',
};

const Rekognition = {
  'us-east-1': 'us-east-1',
  'us-east-2': 'us-east-2',
  'us-west-2': 'us-west-2',
  'ca-central-1': latestRekognitionRegions ? 'ca-central-1' : 'us-east-1',
  'eu-west-1': 'eu-west-1',
  'eu-west-2': 'eu-west-2',
  'eu-central-1': 'eu-central-1',
  'ap-northeast-1': 'ap-northeast-1',
  'ap-northeast-2': 'ap-northeast-2',
  'ap-southeast-1': 'ap-southeast-1',
  'ap-southeast-2': 'ap-southeast-2',
  'ap-south-1': 'ap-south-1',
};

const RekognitionAndTextract = {
  'us-east-1': 'us-east-1',
  'us-east-2': 'us-east-2',
  'us-west-2': 'us-west-2',
  'ca-central-1': latestTextractRegions ? 'ca-central-1' : 'us-east-1',
  'eu-west-1': 'eu-west-1',
  'eu-west-2': latestTextractRegions ? 'eu-west-2' : 'us-east-1',
  'eu-central-1': latestTextractRegions ? 'eu-central-1' : 'us-east-1',
  'ap-northeast-1': 'us-east-1',
  'ap-northeast-2': latestTextractRegions ? 'ap-northeast-2' : 'us-east-1',
  'ap-southeast-1': latestTextractRegions ? 'ap-southeast-1' : 'us-east-1',
  'ap-southeast-2': latestTextractRegions ? 'ap-southeast-2' : 'us-east-1',
  'ap-south-1': latestTextractRegions ? 'ap-south-1' : 'us-east-1',
};

const Comprehend = {
  'us-east-1': 'us-east-1',
  'us-east-2': 'us-east-2',
  'us-west-2': 'us-west-2',
  'ca-central-1': 'ca-central-1',
  'eu-west-1': 'eu-west-1',
  'eu-west-2': 'eu-west-2',
  'eu-central-1': 'eu-central-1',
  'ap-northeast-1': latestComprehendRegions ? 'ap-northeast-1' : 'us-east-1',
  'ap-northeast-2': latestComprehendRegions ? 'ap-northeast-2' : 'us-east-1',
  'ap-southeast-1': 'ap-southeast-1',
  'ap-southeast-2': 'ap-southeast-2',
  'ap-south-1': latestComprehendRegions ? 'ap-south-1' : 'us-east-1',
};

const SageMaker = {
  'us-east-1': 'us-east-1',
  'us-east-2': 'us-east-2',
  'us-west-2': 'us-west-2',
  'ca-central-1': 'ca-central-1',
  'eu-west-1': 'eu-west-1',
  'eu-west-2': 'eu-west-2',
  'eu-central-1': 'eu-central-1',
  'ap-northeast-1': 'ap-northeast-1',
  'ap-northeast-2': 'ap-northeast-2',
  'ap-southeast-1': 'ap-southeast-1',
  'ap-southeast-2': 'ap-southeast-2',
  'ap-south-1': 'ap-south-1',
};

module.exports = {
  Translate,
  Polly,
  Transcribe,
  Rekognition,
  RekognitionAndTextract,
  Comprehend,
  SageMaker,
};
