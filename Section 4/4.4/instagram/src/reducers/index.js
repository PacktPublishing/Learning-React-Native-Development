import { combineReducers } from 'redux';
import PhotosReducers from './photos-reducer';

const rootReducer = combineReducers({
  photos: PhotosReducers
});

export default rootReducer;