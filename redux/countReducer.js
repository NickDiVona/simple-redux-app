// import everything from action types
import * as actionTypes from './actionTypes';

// set up your initial state so you have a starting point
const INITIAL_STATE = { count: 0 };

// set up your reducer and export it
// a reducer will always take in state and an action
export const countReducer = (state = INITIAL_STATE, action) => {
  // switch over all of the action types
  switch (action.type) {
    // if the dispatched action's type matches this, enter this block
    case actionTypes.INCREMENT_COUNT:
      // return an object with all the same keys & values as before
      // return a new value for the count key on the state
      return { ...state, count: state.count + 1 };

    // if no cases match the action dispatched, return whatever the previous state was
    default:
      return state;
  }
};
