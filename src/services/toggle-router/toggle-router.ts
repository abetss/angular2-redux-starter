// doesn't work when running tests
let featureToggleConfig = require('./../../../feature-toggle.yml');
// import { featureToggleConfig } from '../../toggle-config';
import { NewFormula } from '../formula/new-formula';
import { DefaultFormula } from '../formula/default-formula/';
import { NEW_FORMULA_TOGGLE } from './toggles';

export function createToggleRouter(featureConfig = {}) {
  const featureIsEnabled = featureName =>
    !featureConfig[featureName] ? false : featureConfig[featureName].isEnabled;
  const getFeature = (newFeatureName, newFeature, defaultFeature) =>
    featureIsEnabled(newFeatureName) ? newFeature : defaultFeature;

  return {
    setFeature(featureName, isEnabled) {
      featureConfig[featureName].isEnabled = isEnabled;
    },
    createFormula() {
      return getFeature(NEW_FORMULA_TOGGLE, NewFormula, DefaultFormula);
    }
  };
}

export const toggleRouter = createToggleRouter(featureToggleConfig);


