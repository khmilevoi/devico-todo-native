import React from 'react';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {NativeRouter as Router} from 'react-router-native';
import {configureStore} from './src/store/configureStore';

import pushNotification from 'react-native-push-notification';

const store = configureStore();

console.disableYellowBox = true;

pushNotification.configure({
  onRegister: token => {
    console.log('TOKEN:', token);
  },

  onNotification: notification => {
    console.log('NOTIFICATION:', notification);
  },

  senderID: '377767786455',

  popInitialNotification: true,

  requestPermissions: false,
});

const Index = () => {
  return (
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
};

AppRegistry.registerComponent(appName, () => Index);
