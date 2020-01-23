import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {Text, View} from 'react-native';

import {readLocalStorage} from './src/store/actions/localStorage';
import {deleteActive} from './src/store/actions/list';
import {connect} from 'react-redux';

const App = ({online, openShare, readLocalStorage, deleteActive, active}) => {
  useEffect(() => {
    readLocalStorage();

    // window.addEventListener('keydown', event => {
    // if (event.keyCode === 27) {
    // deleteActive();
    // }
    // });
  }, [deleteActive, readLocalStorage]);
  return (
    <View>
      <Text>{online.toString()}</Text>
    </View>
  );
};

App.propTypes = {
  online: PropTypes.bool.isRequired,
  openShare: PropTypes.bool.isRequired,
  readLocalStorage: PropTypes.func.isRequired,
  deleteActive: PropTypes.func.isRequired,
  active: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isPublic: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = state => ({
  online: !!state.auth.user,
  openShare: !!state.share.list,
  active: state.lists.active,
});

deleteActive;
const mapDispatchToProps = {
  readLocalStorage,
  deleteActive,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
