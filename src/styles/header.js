import styled from 'styled-components/native';

import {main} from './constants';
import {createButton} from './shared';

import {BackIcon, SignOutIcon} from '../shared/icons';

export const HeaderWrapper = styled.View`
  width: 100%;
  height: 50px;
  backgroundColor: ${main};
  padding: 10px 15px;
  position: absolute;
  display: flex;
  alignItems: center;
  justifyContent: space-between;
  flexDirection: row;
`;

const Touchable = styled.TouchableOpacity`
`;

export const Back = createButton(Touchable, BackIcon);

export const SignOut = createButton(Touchable, SignOutIcon);

export const Login = styled.Text`
  color: white;
`;
