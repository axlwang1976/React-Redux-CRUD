import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import modalReducer from './modalReducer';
import postsReducer from './postsReducer';

export default combineReducers({
  auth: authReducer,
  modal: modalReducer,
  form: formReducer,
  posts: postsReducer
});
