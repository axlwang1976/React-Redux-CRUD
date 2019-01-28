import _ from 'lodash';

import {
  CREATE_VIDEO,
  GET_VIDEOS,
  GET_VIDEO,
  EDIT_VIDEO,
  DELETE_VIDEO
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_VIDEO:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_VIDEO:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_VIDEO:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_VIDEO:
      return _.omit(state, action.payload);
    case GET_VIDEOS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};
