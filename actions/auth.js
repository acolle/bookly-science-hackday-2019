import { firebase, database } from '../config/firebase.js';

export const activeSession = async () => {
  try {
    let user = await firebase.auth().currentUser;
    if (user) {
      return({
        type: 'ACTIVE',
        uid: user.uid,
        username: user.username,
        email: user.email,
      });
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};

export const login = async (email, password) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    if (response.user) {
      return({
        type: 'LOGIN',
        uid: response.user.uid,
        username: response.user.username,
        email: response.user.email,
      });
    }
  } catch (e) {
    console.log(e);
    return { message: "No user registed with this email"}
  }
}

export const signup = async (username, email, password) => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    if (response.user) {
      database.ref('users').push({
        username,
        email
       });
      return({
        type: 'SIGNUP',
        uid: response.user.uid,
        username: response.user.username,
        email: response.user.email,
      });
    }
  } catch (e) {
    console.log(e)
  }
}
