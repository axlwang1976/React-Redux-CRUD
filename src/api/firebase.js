import axios from 'axios';

export const firebase = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://reactreduxcrud.firebaseio.com'
});
