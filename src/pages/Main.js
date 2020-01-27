import React from 'react';

import {Route, Switch} from 'react-router-native';

import Header from '../components/Header';
import Lists from '../components/Lists';
import Todos from '../components/Todos';

import {MainWrapper} from '../styles/main';

const Main = () => {
  return (
    <MainWrapper>
      <Switch>
        <Route exact strict path="/" component={Lists} />

        <Route path="/lists/:id" component={Todos} />
      </Switch>

      <Header />
    </MainWrapper>
  );
};

export default Main;
