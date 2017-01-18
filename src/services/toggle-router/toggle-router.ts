// doesn't work when running tests
// let featureToggleConfig = require('./../../../feature-toggle.yml');
import { featureToggleConfig } from '../../toggle-config';

export function createToggleRouter(featureConfig = {}) {
  const featureIsEnabled = featureName =>
    !featureConfig[featureName] ? false : featureConfig[featureName].isEnabled;

  return {
    setFeature(featureName, isEnabled) {
      featureConfig[featureName].isEnabled = isEnabled;
    },
    getFeature(newFeatureName, newFeature, defaultFeature) {
      return featureIsEnabled(newFeatureName) ? newFeature : defaultFeature;
    }
  };
}

export const toggleRouter = createToggleRouter(featureToggleConfig);


