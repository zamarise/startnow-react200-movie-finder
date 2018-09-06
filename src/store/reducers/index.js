// combine all reducers into one place called rootReducer
import { combineReducers } from 'redux';

import searchReducer from './searchReducer';

// will run through a reducer everytime action is dispatched.
// will dispatch those things that matter into their respective places in reducer.
const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
