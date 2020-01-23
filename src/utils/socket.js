import AsyncStorage from '@react-native-community/async-storage';

import io from 'socket.io-client';

import {AUTH_ITEM} from '../constants/localStorage';

export const socket = io('http://localhost:3000');

socket.on('reconnect', async () => {
  const ls = (await AsyncStorage.getItem(AUTH_ITEM)) || '{}';
  const {token} = JSON.parse(ls);

  if (token) {
    socket.emit('auth', token);
  }
});
