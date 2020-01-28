import React from 'react';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {NativeRouter as Router} from 'react-router-native';
import {configureStore} from './src/store/configureStore';

import firebase from 'react-native-firebase';

const store = configureStore();

console.disableYellowBox = true;

firebase
  .messaging()
  .getToken()
  .then(token => console.log(token));

firebase.messaging().onMessage(message => {
  console.log('MESSAGE!!!!!!!!!!!!!!!!!!!!!!!!');
  console.log(message);
});

firebase.notifications().onNotification(notification => {
  console.log('NOTIFICATION!!!!!!!!!!!!!!!!!!!!!!!!');
  console.log(notification);
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
