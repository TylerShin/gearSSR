import { CALL_API } from 'middleware/api';

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
  return {
    [CALL_API]: {
      method: 'post',
      body: {
        email,
        password,
      },
      path: '/api/login',
      successType: SIGN_IN,
    }
  };
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
