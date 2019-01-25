import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_VIDEO,
  GET_VIDEOS,
  GET_VIDEO,
  EDIT_VIDEO,
  DELETE_VIDEO
} from './types';
import { firebase } from '../api/firebase';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createVideo = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await firebase.post('/videos.json', { ...formValues, userId });
  dispatch({ type: CREATE_VIDEO, payload: res.data });
};

export const getVideos = () => async dispatch => {
  const res = await firebase.get('/videos.json');
  dispatch({ type: GET_VIDEOS, payload: res.data });
};

export const getVideo = id => async dispatch => {
  const res = await firebase.get(`/videos.json/${id}`);
  dispatch({ type: GET_VIDEO, payload: res.data });
};

export const editVideo = (id, formValues) => async dispatch => {
  const res = await firebase.put(`/videos.json/${id}`, formValues);
  dispatch({ type: EDIT_VIDEO, payload: res.data });
};

export const deleteVideo = id => async dispatch => {
  await firebase.delete(`/videos.json/${id}`);
  dispatch({ type: DELETE_VIDEO, payload: id });
};
