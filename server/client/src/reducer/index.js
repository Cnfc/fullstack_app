import { combineReducers } from 'redux';

import survetsReducer from './survetsReducer';
import authReducer from './authReducer';

export default combineReducers({
  post: survetsReducer,
  auth: authReducer
});