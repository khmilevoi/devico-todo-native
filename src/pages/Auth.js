import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';


import {logIn, register} from '../store/actions/auth';

import {AuthWrapper, Buttons, Button, Send, Form, Input, Error} from '../styles/auth';

const Auth = ({error, logIn, register}) => {
  const [state, setState] = useState('login');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthWrapper>
      <Buttons>
        <Button
          title="login"
          onPress={() => setState('login')}
          active={state === 'login'}
        />
        <Button
          title="register"
          onPress={() => setState('register')}
          active={state === 'register'}
        />
      </Buttons>

      <Form>
        <Input
          autoCompleteType="username"
          value={login}
          onChangeText={text => setLogin(text)}
          placeholder="login"
        />
        <Input
          autoCompleteType="password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="password"
        />
        <Error>{error && error.message}</Error>
        <Send
          title="send"
          onPress={() => {
            if (state === 'login') {
              logIn(login, password);
            } else if (state === 'register') {
              register(login, password);
            }
          }}
        />
      </Form>
    </AuthWrapper>
  );
};

Auth.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  logIn: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.auth.error,
});

const mapDispatchToProps = {
  logIn,
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
