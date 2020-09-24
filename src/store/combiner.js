import { combineReducers } from 'redux';

// modules
import usersReducers from './modules/users';

const rootReducer = combineReducers({
  ...usersReducers
});

export default rootReducer;
