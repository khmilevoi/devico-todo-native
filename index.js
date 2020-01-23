import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {NativeRouter} from 'react-router-native';
import {configureStore} from './src/store/configureStore';

const store = configureStore();

const Index = () => {
  return (
    <NativeRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </NativeRouter>
  );
};

AppRegistry.registerComponent(appName, () => Index);
