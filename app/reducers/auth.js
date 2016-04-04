import * as ActionType from 'actions/auth';

function authReducer(state = {}, action) {
  switch (action.type) {
    case ActionType.SIGN_IN:
      ActionType.saveLocalStorage(action.user);
      return {
        currentUser: action.user
      };

    default:
      return state;
  }
}

export default authReducer;
