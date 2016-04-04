import { CALL_API } from 'middleware/api';
import axios from 'axios';
import config from 'config';
// Constants
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';

export function saveLocalStorage(auth) {
  if (auth.access_token) {
    localStorage.clear();
    const userInJson = JSON.stringify(auth);
    localStorage.setItem('currentUser', userInJson);
  }
}

export function signIn(email, password) {
  return dispatch =>
    axios.post(`${config.API_BASE_URL}/api/login`, {
      email,
      password
    })
    .then((res) => {
      console.log(res);
      saveLocalStorage(res.data);
    })
    .catch((res) => {
      alert(res.data);
    })
  // {
  //   [CALL_API]: {
  //     method: 'post',
  //     body: {
  //       email,
  //       password,
  //     },
  //     path: '/api/login',
  //     successType: SIGN_IN,
  //   }
  // };
}

export function signUp(email, password, passwordConfirmation) {
  return {
    [CALL_API]: {
      method: 'post',
      body: {
        email,
        password,
        passwordConfirmation
      },
      path: '/api/signUp',
      successType: SIGN_IN,
    }
  };
}
