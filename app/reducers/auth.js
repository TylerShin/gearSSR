import * as ActionType from 'actions/auth';

function authReducer (state = {}, action) {
  switch(action.type) {
    case ActionType.SIGN_IN:
      return {
        currentUser: action.response
      };
      break;
    default:
      return state;
  }
}

export default authReducer;
