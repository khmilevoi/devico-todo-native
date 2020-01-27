import React from 'react';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {NativeRouter as Router} from 'react-router-native';
import {configureStore} from './src/store/configureStore';

const store = configureStore();

console.disableYellowBox = true;

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
