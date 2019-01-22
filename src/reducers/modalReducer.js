import { MODAL_OPEN, MODAL_CLOSE } from '../actions/types';

const initState = {
  isModalOpened: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return { ...state, isModalOpened: true };
    case MODAL_CLOSE:
      return { ...state, isModalOpened: false };
    default:
      return initState;
  }
};
