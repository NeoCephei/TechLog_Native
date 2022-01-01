import { combineReducers } from 'redux';
import login from './reducers/login'
import timer from './reducers/timer'
import lifes from './reducers/lifes'
import questions from './reducers/questions'

const rootReducer = combineReducers(
  { 
    login, timer, lifes, questions
  }
);

export default rootReducer;