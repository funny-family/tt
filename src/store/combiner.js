import { combineReducers } from 'redux';

// modules
import users from './reducers/users-reducer';

const rootReducer = combineReducers({
  users
});

export default rootReducer;
