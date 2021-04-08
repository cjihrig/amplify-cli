const { FeatureFlags } = require('amplify-cli-core');
const latestTranslateRegions = FeatureFlags.getNumber('latestRegionSupport.translate');
const latestTranscribeRegions = FeatureFlags.getNumber('latestRegionSupport.transcribe');
const latestRekognitionRegions = FeatureFlags.getNumber('latestRegionSupport.rekognition');
const latestTextractRegions = FeatureFlags.getNumber('latestRegionSupport.textract');
const latestComprehendRegions = FeatureFlags.getNumber('latestRegionSupport.comprehend');

const Translate = {
  'us-east-1': 'us-east-1',
  'us-east-2': latestTranslateRegions >= 1 ? 'us-east-2' : 'us-east-1',
  'us-west-2': 'us-west-2',
  'ca-central-1': 'ca-central-1',
  'eu-west-1': 'eu-west-1',
  'eu-west-2': latestTranslateRegions >= 1 ? 'eu-west-2' : 'eu-west-1',
  'eu-central-1': 'eu-central-1',
  'ap-northeast-1': 'ap-northeast-1',
  'ap-northeast-2': 'ap-northeast-2',
  'ap-southeast-1': 'ap-southeast-1',
  'ap-southeast-2': latestTranslateRegions >= 1 ? 'ap-southeast-2' : 'ap-southeast-1',
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
  'ap-northeast-1': latestTranscribeRegions >= 1 ? 'ap-northeast-1' : 'ap-northeast-2',
  'ap-northeast-2': 'ap-northeast-2',
  'ap-southeast-1': 'ap-southeast-1',
  'ap-southeast-2': 'ap-southeast-2',
  'ap-south-1': 'ap-south-1',
};

const Rekognition = {
  'us-east-1': 'us-east-1',
  'us-east-2': 'us-east-2',
  'us-west-2': 'us-west-2',
  'ca-central-1': latestRekognitionRegions >= 1 ? 'ca-central-1' : 'us-east-1',
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
  'ca-central-1': latestTextractRegions >= 1 ? 'ca-central-1' : 'us-east-1',
  'eu-west-1': 'eu-west-1',
  'eu-west-2': latestTextractRegions >= 1 ? 'eu-west-2' : 'us-east-1',
  'eu-central-1': latestTextractRegions >= 1 ? 'eu-central-1' : 'us-east-1',
  'ap-northeast-1': 'us-east-1',
  'ap-northeast-2': latestTextractRegions >= 1 ? 'ap-northeast-2' : 'us-east-1',
  'ap-southeast-1': latestTextractRegions >= 1 ? 'ap-southeast-1' : 'us-east-1',
  'ap-southeast-2': latestTextractRegions >= 1 ? 'ap-southeast-2' : 'us-east-1',
  'ap-south-1': latestTextractRegions >= 1 ? 'ap-south-1' : 'us-east-1',
};

const Comprehend = {
  'us-east-1': 'us-east-1',
  'us-east-2': 'us-east-2',
  'us-west-2': 'us-west-2',
  'ca-central-1': 'ca-central-1',
  'eu-west-1': 'eu-west-1',
  'eu-west-2': 'eu-west-2',
  'eu-central-1': 'eu-central-1',
  'ap-northeast-1': latestComprehendRegions >= 1 ? 'ap-northeast-1' : 'us-east-1',
  'ap-northeast-2': latestComprehendRegions >= 1 ? 'ap-northeast-2' : 'us-east-1',
  'ap-southeast-1': 'ap-southeast-1',
  'ap-southeast-2': 'ap-southeast-2',
  'ap-south-1': latestComprehendRegions >= 1 ? 'ap-south-1' : 'us-east-1',
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
