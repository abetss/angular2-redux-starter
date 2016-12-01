import { Action } from 'redux';
import { CounterActions } from '../../actions/counter.actions';
import { SessionActions } from '../../actions/session.actions';
import { INITIAL_STATE } from './counter.initial-state';
import { ICounterRecord } from './counter.types';
import { Formula } from '../../services/formula';

export function counterReducer(
  state: ICounterRecord = INITIAL_STATE,
  action: Action): ICounterRecord {

  switch (action.type) {

  case CounterActions.INCREMENT_COUNTER:
    return state.update('counter', Formula.increment);

  case CounterActions.DECREMENT_COUNTER:
    return state.update('counter', Formula.decrement);

  case SessionActions.LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
}
