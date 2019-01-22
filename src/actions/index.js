import { SIGN_IN, SIGN_OUT, MODAL_OPEN, MODAL_CLOSE } from './types';

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
