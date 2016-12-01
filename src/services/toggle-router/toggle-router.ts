import { featureToggleConfig } from '../../feature-toggle.config';

function createToggleRouter(featureConfig = {}){
  return {
    setFeature(featureName, isEnabled){
      featureConfig[featureName].isEnabled = isEnabled;
    },
    featureIsEnabled(featureName){
      // TODO: check if feature toggle should be expired log a warning or should we write tests for feature-toggle.config
      // to check the shouldBeExpired
      return featureConfig[featureName].isEnabled;
    }
  };
}

export const toggleRouter = createToggleRouter(featureToggleConfig);


