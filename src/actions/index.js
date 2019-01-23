import {
  SIGN_IN,
  SIGN_OUT,
  MODAL_OPEN,
  MODAL_CLOSE,
  CREATE_POST,
  GET_POSTS,
  GET_POST,
  EDIT_POST,
  DELETE_POST
} from './types';
import { firebase } from '../api/firebase';

export const signIn = uid => {
  return {
    type: SIGN_IN,
    payload: uid
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const modalOpen = () => {
  return {
    type: MODAL_OPEN
  };
};

export const modalClose = () => {
  return {
    type: MODAL_CLOSE
  };
};

export const createPost = formValues => async (dispatch, getState) => {
  const { uid } = getState().auth;
  const res = await firebase.post('/posts.json', { ...formValues, uid });
  dispatch({ type: CREATE_POST, payload: res.data });
};

export const getPosts = () => async dispatch => {
  const res = await firebase.get('/posts.json');
  dispatch({ type: GET_POSTS, payload: res.data });
};

export const getPost = id => async dispatch => {
  const res = await firebase.get(`/posts.json/${id}`);
  dispatch({ type: GET_POST, payload: res.data });
};

export const editPost = (id, formValues) => async dispatch => {
  const res = await firebase.put(`/posts.json/${id}`, formValues);
  dispatch({ type: EDIT_POST, payload: res.data });
};

export const deletePost = id => async dispatch => {
  await firebase.delete(`/posts.json/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
};
