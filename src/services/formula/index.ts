import { NewFormula } from './new-formula';
import { OldFormula } from './old-forumla/';
import { toggleRouter } from '../toggle-router/toggle-router';

export const Formula =
  toggleRouter.getFeature('new-formula', NewFormula, OldFormula);
