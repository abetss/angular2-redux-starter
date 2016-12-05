let featureToggleConfig = require('./../../../feature-toggle.yml');

function createToggleRouter(featureConfig = {}) {
  return {
    setFeature(featureName, isEnabled) {
      featureConfig[featureName].isEnabled = isEnabled;
    },
    featureIsEnabled(featureName) {
      return featureConfig[featureName].isEnabled;
    },
    getFeature(newFeatureName, newFeature, oldFeature) {
      return this.featureIsEnabled(newFeatureName) ? newFeature : oldFeature;
    }
  };
}

export const toggleRouter = createToggleRouter(featureToggleConfig);


