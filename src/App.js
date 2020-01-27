import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-native';

import * as s from './styles/app';

import {readLocalStorage} from './store/actions/localStorage';
import {deleteActive} from './store/actions/list';

import Auth from './pages/Auth';
import Main from './pages/Main';

const App = ({
  authorized,
  openShare,
  readLocalStorage,
  deleteActive,
  active,
}) => {
  useEffect(() => {
    readLocalStorage();
  }, [deleteActive, readLocalStorage]);

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
});

const mapDispatchToProps = {
  readLocalStorage,
  deleteActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
