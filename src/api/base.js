import Rebase from 're-base';
import firebase from 'firebase';

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBbZ2vHHPNRmmFaa-niDQeCZybZ-qLxC1E',
  authDomain: 'reactreduxcrud.firebaseapp.com',
  databaseURL: 'https://reactreduxcrud.firebaseio.com'
});

export const base = Rebase.createClass(firebaseApp.database());
