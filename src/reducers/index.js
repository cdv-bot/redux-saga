import { combineReducers } from 'redux';
import taskReducer from './task';
import uiReducer from './ui.js';
import modalReducer from './modal.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  task: taskReducer,
  ui: uiReducer,
  modal: modalReducer,
  form: formReducer

});

export default rootReducer;
