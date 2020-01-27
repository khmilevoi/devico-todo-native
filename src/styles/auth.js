import React from 'react';

import styled from 'styled-components/native';

import {infinity, red, main} from './constants';
import { createButton } from './shared';

export const AuthWrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${main};
  z-index: ${infinity};
`;

export const Buttons = styled.View`
  width: 100%;
  height: 40px;
  display: flex;
  flexDirection: row;
`;

const ButtonWrapper = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  display: flex;
  alignItems: center;
  justifyContent: center;
  borderBottomColor: ${({active}) => (active ? 'white' : 'transparent')};
  borderBottomWidth: 1px;
  backgroundColor: ${({active}) => active ?  '#2e59cb' : 'transparent'};
`;

export const Text = styled.Text`
  textTransform: capitalize;
  color: white;
`;

export const Button = createButton(ButtonWrapper, Text);

export const Form = styled.View``;

export const Input = styled.TextInput`
  padding: 10px;
  color: white;
`;

export const Error = styled.Text`
  height: 20px;
  padding: 0 10px;
  color: ${red};
`;

const SendWrapper = styled.TouchableOpacity`
  display: flex;
  alignItems: center;
  justifyContent: center;
`;

export const Send = createButton(SendWrapper, Text);
