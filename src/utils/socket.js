import AsyncStorage from '@react-native-community/async-storage';

import io from 'socket.io-client';

import {AUTH_ITEM} from '../constants/localStorage';
import {config} from '../constants/config';

export const socket = io(`http://${config.host}:${config.PORT}`);

socket.on('reconnect', async () => {
  const ls = (await AsyncStorage.getItem(AUTH_ITEM)) || '{}';
  const {token} = JSON.parse(ls);

  if (token) {
    socket.emit('auth', token);
  }
});
