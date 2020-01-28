import styled from 'styled-components/native';

import {createButton} from './shared';

import {DeleteIcon} from '../shared/icons';
import { transparentSilver, infinity, main } from './constants';

export const TodosWrapper = styled.View`
  paddingTop: 50px;
  paddingBottom: 50px;
`;

export const ListWrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const TodoWrapper = styled.View`
  padding: 5px 10px;
  display: flex;
  flexDirection: row;
`;

export const Inner = styled.Text`
  flex: 10;
`;

export const DeleteButton = createButton(undefined, DeleteIcon);

export const AddButtonWrapper = styled.View`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flexDirection: row;
  backgroundColor: ${transparentSilver};
  padding: 5px 10px;
`;

export const InnerInput = styled.TextInput`
  flex: 6;
  backgroundColor: white;
  borderRadius: 5px;
`;

export const AddButtonInner = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: ${infinity}px;
  background-color: ${main};
  display: flex;
  alignItems: center;
  justifyContent: center;
  margin-left: 10px;
`;

export const AddButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const AddButton = createButton(AddButtonInner, AddButtonText);
