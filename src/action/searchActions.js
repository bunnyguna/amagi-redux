import axios from 'axios';
import { SEARCH_VIDEO, FETCH_VIDEOS, SELECTED_VIDEO } from './types';

const KEY = 'AIzaSyBMU44vVKKtJ0xpfMPRDvHzQh_EUfPRFhY'; 


export const searchVideo = text => dispatch => {
  dispatch({
    type: SEARCH_VIDEO,
    payload: text
  });
};

export const fetchVideos = text => dispatch => {
  axios
    .get(`https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet,id&order=date&maxResults=5&q=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_VIDEOS,
        payload: response.data.items
      })
    )
    .catch(err => console.log(err));
};

export const selectedVideo = text => dispatch => {
    dispatch({
      type: SELECTED_VIDEO,
      payload: text
    });
  };