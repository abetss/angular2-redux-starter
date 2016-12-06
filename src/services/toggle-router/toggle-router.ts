// doesn't work when running tests
let featureToggleConfig = require('./../../../feature-toggle.yml');
// import { featureToggleConfig } from '../../toggle-config';
import { NewFormula } from '../formula/new-formula';
import { OldFormula } from '../formula/old-forumla/';
import { NEW_FEATURE } from './toggles';

export function createToggleRouter(featureConfig = {}) {
  const featureIsEnabled = featureName =>
    !featureConfig[featureName] ? false : featureConfig[featureName].isEnabled;
  const getFeature = (newFeatureName, newFeature, oldFeature) =>
    featureIsEnabled(newFeatureName) ? newFeature : oldFeature;

  return {
    setFeature(featureName, isEnabled) {
      featureConfig[featureName].isEnabled = isEnabled;
    },
    createFormula() {
      return getFeature(NEW_FEATURE, NewFormula, OldFormula);
    }
  };
}

export const toggleRouter = createToggleRouter(featureToggleConfig);


