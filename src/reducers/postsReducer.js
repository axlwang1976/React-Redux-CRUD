import _ from 'lodash';

import {
  CREATE_POST,
  GET_POSTS,
  GET_POST,
  EDIT_POST,
  DELETE_POST
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_POST:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_POST:
      return _.omit(state, action.payload);
    case GET_POSTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
