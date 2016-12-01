import { NewFormula } from './new-formula';
import { OldFormula } from './old-formula';
import { toggleRouter } from '../toggle-router/toggle-router';

const decideNewOrOldFormula = (toggleRouter) => {
  return toggleRouter.featureIsEnabled('new-formula') ? NewFormula : OldFormula;
};

export const Formula = decideNewOrOldFormula(toggleRouter);


// Todo: should we use polymorphism here?
// Todo: add interface
// Todo: security ?

