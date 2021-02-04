import { combineReducers } from 'redux';
import videoReducer from './videoReducers';

export default combineReducers({
  videos: videoReducer
});
