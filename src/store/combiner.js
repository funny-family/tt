import { combineReducers } from 'redux';

import reduceFetchedUsers from './user/reducers/reduce-fetched-users';

const rootReducer = combineReducers({
  // here should be all imported reducers!
  reduceFetchedUsers
});

export default rootReducer;
