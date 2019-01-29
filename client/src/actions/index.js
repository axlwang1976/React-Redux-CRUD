import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_VIDEO,
  GET_VIDEOS,
  GET_VIDEO,
  EDIT_VIDEO,
  DELETE_VIDEO
} from './types';
import { db } from '../api/db';
import history from '../history';

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
  const res = await db.post('/videos', { ...formValues, userId });
  dispatch({ type: CREATE_VIDEO, payload: res.data });
  history.push('/');
};

export const getVideos = () => async dispatch => {
  const res = await db.get('/videos');
  dispatch({ type: GET_VIDEOS, payload: res.data });
};

export const getVideo = id => async dispatch => {
  const res = await db.get(`/videos/${id}`);
  dispatch({ type: GET_VIDEO, payload: res.data });
};

export const editVideo = (id, formValues) => async dispatch => {
  const res = await db.patch(`/videos/${id}`, formValues);
  dispatch({ type: EDIT_VIDEO, payload: res.data });
  history.push('/');
};

export const deleteVideo = id => async dispatch => {
  await db.delete(`/videos/${id}`);
  dispatch({ type: DELETE_VIDEO, payload: id });
  history.push('/');
};
