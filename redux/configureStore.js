// imports from node_modules
import { createStore, combineReducers } from 'redux';
// imports from user created files
import { countReducer } from './countReducer';

// define the root reducer, the backbone of your redux data store
// it is equal to whatever combine reducers returns
// combine reducers takes in a reducer and maps it to a key, whos name you choose
const rootReducer = combineReducers({
  count: countReducer
});

// create your store and give it a name
// pass in your root reducer as the argument to the createStore method
const myStore = createStore(rootReducer);

// export your store to be used in App.js
export default myStore;
