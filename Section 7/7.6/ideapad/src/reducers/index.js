import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication-reducer';
import IdeaPadFormReducer from './ideapad-form-reducer';
import IdeasReducer from './ideas-reducer';

export default combineReducers({
  auth: AuthenticationReducer,
  ideaPadForm: IdeaPadFormReducer,
  ideas: IdeasReducer
})