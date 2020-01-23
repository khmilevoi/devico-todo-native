import AsyncStorage from '@react-native-community/async-storage';

import {initialState} from '../../constants/initialState';
import {auth, localStorage, lists} from '../../constants/actionTypes';
import {AUTH_ITEM, ACTIVE_ITEM} from '../../constants/localStorage';

const loadToLocalStorage = (item, data) => {
  AsyncStorage.setItem(item, JSON.stringify(data));
};

const removeFromLocalStorage = item => {
  AsyncStorage.removeItem(item);
};

export const localStorageReducer = (
  state = initialState.localStorage,
  {type, payload},
) => {
  switch (type) {
    case auth.USER.SET: {
      loadToLocalStorage(AUTH_ITEM, payload);

      return state;
    }

    case auth.USER.DELETE: {
      removeFromLocalStorage(AUTH_ITEM);

      return state;
    }

    case lists.ACTIVE.SET: {
      loadToLocalStorage(ACTIVE_ITEM, payload.id);

      return state;
    }

    case lists.ACTIVE.DELETE: {
      removeFromLocalStorage(ACTIVE_ITEM);

      return state;
    }

    case localStorage.SET: {
      return payload;
    }

    default: {
      return state;
    }
  }
};
