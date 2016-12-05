import { NewFormula } from './new-formula';
import { OldFormula } from './old-forumla/';
import { toggleRouter } from '../toggle-router/toggle-router';
import { NEW_FEATURE } from '../toggle-router/toggles';

export const Formula =
  toggleRouter.getFeature(NEW_FEATURE, NewFormula, OldFormula);
