import {combineReducers} from 'redux';

import {listsReducer} from './list';
import {todosReducer} from './todo';
import {authReducer} from './auth';
import {errorReducer} from './error';
import {localStorageReducer} from './localStorage';
import {shareReducer} from './share';

export const root = combineReducers({
  lists: listsReducer,
  todos: todosReducer,
  auth: authReducer,
  error: errorReducer,
  localStorage: localStorageReducer,
  share: shareReducer,
});
