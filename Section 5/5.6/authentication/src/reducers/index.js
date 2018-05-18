import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication-reducer';

export default combineReducers({
  auth: AuthenticationReducer
})