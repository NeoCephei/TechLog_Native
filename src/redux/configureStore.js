import { createStore, combineReducers } from 'redux';
import login from './reducers/login'
import timer from './reducers/timer'
import lifes from './reducers/lifes'

const rootReducer = combineReducers(
  { 
    login, timer, lifes
  }
);

export default rootReducer;