import { CALL_API } from 'middleware/api';

export const SIGN_IN = 'SIGN_IN';

export function signIn(email, password) {
  return {
    [CALL_API]: {
      method: 'post',
      body: {
        email,
        password,
      },
      url: 'http://localhost:4000/api/login',
      successType: SIGN_IN,
    }
  };
}
