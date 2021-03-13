import * as actionTypes from './actionTypes';

const INITIAL_STATE = { count: 0 };

export const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNT:
      return { count: state.count + 1 };

    default:
      return state;
  }
};
