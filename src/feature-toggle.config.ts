export const featureToggleConfig = {
  'new-formula': {
    isEnabled: true,
    description: 'Change by the factor of 5. It intends to replace OldFormula.',
    shouldExpireAt: '08-13-2016', // other possible name is deadline
    responsible: 'Abtin Ghods', //The engineer/team responsible to monitor and remove the toggle. Usually, this responsibility is given to the one which have chosen to add it.
    cleanUpHowTo: ''
  }
};

// Todo: move the config into a YAML file
