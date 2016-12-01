export const featureToggleConfig = {
  'new-formula': {
    isEnabled: true,
    description:
      `Change by the factor of 5. 
      It intends to replace OldFormula with NewFormula.`,
    shouldExpireAt: '08-13-2016', // other possible name is deadline
    // the engineer/team responsible to monitor and remove the toggle. Usually,
    // this responsibility is given to the one which have chosen to add it.
    responsible: 'Abtin Ghods',
    cleanUpHowTo: '',
    // if this feature is among the features that are designed to interact with
    //  each other
    group: null,
  }
};

// Todo: move the config into a YAML file
