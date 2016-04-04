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

export function saveCurrentUserStore(user) {
  return {
    type: SIGN_IN,
    user,
  };
}

export function signIn(email, password) {
  return dispatch =>
    axios.post(`${config.API_BASE_URL}/api/login`, {
      email,
      password
    })
    .then((res) => {
      saveLocalStorage(res.data);
      dispatch(saveCurrentUserStore(res.data));
    })
    .catch((res) => {
      alert(res.data.error);
    });
}

export function signUp(email, password, passwordConfirmation) {
  return dispatch =>
    axios.post(`${config.API_BASE_URL}/api/signUp`, {
      email,
      password,
      passwordConfirmation
    })
    .then((res) => {
      saveLocalStorage(res.data);
      dispatch(saveCurrentUserStore(res.data));
    })
    .catch((res) => {
      alert(res.data.error);
    });
}
