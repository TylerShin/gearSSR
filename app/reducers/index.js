import { combineReducers } from 'redux';
import questions from 'reducers/questions';
import auth from 'reducers/auth';

const rootReducer = combineReducers({
  questions,
  auth
});

export default rootReducer;
