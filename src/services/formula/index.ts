import { NewFormula } from '../formula/new-formula';
import { DefaultFormula } from '../formula/default-formula/';
import { NEW_FORMULA_TOGGLE } from '../toggle-router/toggles';
import { toggleRouter } from '../toggle-router/toggle-router';

export const Formula =
  toggleRouter.getFeature(NEW_FORMULA_TOGGLE, NewFormula, DefaultFormula);
