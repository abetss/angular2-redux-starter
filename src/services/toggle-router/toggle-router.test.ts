import { createToggleRouter } from './toggle-router';
import { NewFormula } from '../formula/new-formula';
import { DefaultFormula } from '../formula/default-formula/';

describe('Service: Toggle', () => {
  let toggleRouter;

  it('should return the new Formula with toggle is true', () => {
    let featureToggleConfig = {
      'new-formula': { isEnabled: true },
    };
    toggleRouter = createToggleRouter(featureToggleConfig);
    const Formula = toggleRouter.createFormula();
    expect(Formula).toBe(NewFormula);
  });

  it('should return the old Formula with toggle is false', () => {
    let featureToggleConfig = {
      'new-formula': { isEnabled: false },
    };
    toggleRouter = createToggleRouter(featureToggleConfig);
    const Formula = toggleRouter.createFormula();
    expect(Formula).toBe(DefaultFormula);
  });

  it('should return the old Formula if the formula toggle config did no' +
    ' exist', () => {
    let featureToggleConfig = {};
    toggleRouter = createToggleRouter(featureToggleConfig);
    const Formula = toggleRouter.createFormula();
    expect(Formula).toBe(DefaultFormula);
  });
});
