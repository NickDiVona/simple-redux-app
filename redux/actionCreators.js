// import everything from action types
import * as actionTypes from './actionTypes';

// set up an action creator, which will return an action
// actions are always sent to ALL reducers
// an action always needs a type, and sometimes a payload
export const incrementCount = () => {
  return {
    type: actionTypes.INCREMENT_COUNT
  };
};
