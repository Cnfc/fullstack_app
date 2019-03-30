import { combineReducers } from 'redux';
import survetsReducer from './survetsReducer';


export default combineReducers({
  post: survetsReducer
});