import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import {root} from './reducers/root';
import {logger} from '../middlewares/logger';
import {withSocket} from '../middlewares/withSocket';
import {socketListener} from '../utils/socketListener';
import {socket} from '../utils/socket';

import {initialState} from '../constants/initialState';

export const configureStore = () => {
  const store = createStore(root, initialState, applyMiddleware(logger, thunk));

  return withSocket(store, socketListener, socket);
};
