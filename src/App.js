import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {Linking} from 'react-native';

import {connect} from 'react-redux';
import {Redirect, Route, useHistory} from 'react-router-native';

import * as s from './styles/app';

import {readLocalStorage} from './store/actions/localStorage';
import {deleteActive, setActive} from './store/actions/list';

import Auth from './pages/Auth';
import Main from './pages/Main';

const App = ({
  authorized,
  openShare,
  readLocalStorage,
  deleteActive,
  setActive,
  active,
  lists,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (!authorized) {
      readLocalStorage();
    }

    Linking.getInitialURL().then(url => {
      if (authorized) {
        const route = url.replace(/^(\w+:\/)/, '');
        const list = +route.replace(/^(\/\w+\/)/, '');

        history.push(route);
        setActive(lists.find(item => item.id === list));
      }
    });
  }, [authorized, lists.length]);

  return (
    <s.App>
      {authorized ? <Redirect to="/" /> : <Redirect to="/auth" />}

      <Route path="/auth" component={Auth} />
      <Route path="/" component={Main} />
    </s.App>
  );
};

App.propTypes = {
  authorized: PropTypes.bool.isRequired,
  openShare: PropTypes.bool.isRequired,
  readLocalStorage: PropTypes.func.isRequired,
  deleteActive: PropTypes.func.isRequired,
  active: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isPublic: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = state => ({
  authorized: !!state.auth.user,
  openShare: !!state.share.list,
  active: state.lists.active,
  lists: [...state.lists.personal, ...state.lists.shared],
});

const mapDispatchToProps = {
  readLocalStorage,
  deleteActive,
  setActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
