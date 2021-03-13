import { createStore, combineReducers } from 'redux';
import { countReducer } from './countReducer';

const rootReducer = combineReducers({
  count: countReducer
});

const myStore = createStore(rootReducer);

export default myStore;
