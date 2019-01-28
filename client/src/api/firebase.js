import axios from 'axios';

export const firebase = axios.create({
  baseURL: 'http://localhost:3001'
});
