import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication-reducer';
import IdeaPadFormReducer from './ideapad-form-reducer';

export default combineReducers({
  auth: AuthenticationReducer,
  ideaPadForm: IdeaPadFormReducer
})