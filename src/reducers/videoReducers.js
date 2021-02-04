import {
    SEARCH_VIDEO,
    FETCH_VIDEOS,
    SELECTED_VIDEO
  } from '../action/types';
  
  const initialState = {
    text: '',
    videos: [],
    selectedVideo: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SEARCH_VIDEO:
        return {
          ...state,
          text: action.payload,
        };
      case FETCH_VIDEOS:
        return {
          ...state,
          videos: action.payload,
        };
      case SELECTED_VIDEO:
        return {
          ...state,
          selectedVideo: action.payload,
        };
      default:
        return state;
    }
  }
  