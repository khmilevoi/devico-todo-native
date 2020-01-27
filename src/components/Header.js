import React from 'react';
import PropTypes from 'prop-types';

import {useHistory} from 'react-router-native';
import {connect} from 'react-redux';

import {HeaderWrapper, Back, Login, SignOut} from '../styles/header';
import {deleteActive} from '../store/actions/list';
import {deleteUser} from '../store/actions/auth';

const Header = ({active, user, deleteActive, deleteUser}) => {
  const history = useHistory();
  useHistory;
  return (
    <HeaderWrapper>
      {active && (
        <Back
          onPress={() => {
            deleteActive();
            history.push('/');
          }}
          color="white"
        />
      )}
      {<Login>{active ? active.name : user && user.login}</Login>}

      <SignOut onPress={deleteUser} color="white" />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  active: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isPublic: PropTypes.bool.isRequired,
  }),
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
  }),
  deleteActive: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  active: state.lists.active,
  user: state.auth.user,
});

const mapDispatchToProps = {
  deleteActive,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
