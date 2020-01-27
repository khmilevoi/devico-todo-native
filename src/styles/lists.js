import styled from 'styled-components/native';

import { silver, transparentSilver } from './constants';
import { createButton } from './shared';

export const ListsWrapper = styled.ScrollView`
  width: 100%;
  height: 90%;
  paddingTop: 50px;
  overflow: hidden;
`;

export const Section = styled.View`
  width: 100%;
  height: ${({collapsed}) => (collapsed ? '30px' : 'auto')};
  overflow: hidden;
`;

export const Target = styled.TouchableOpacity``;

export const Title = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  alignItems: center;
  justifyContent: space-between;
  flexDirection: row;
  padding: 0 5px;
  background-color: ${silver};
  textTransform: lowercase;
`;

export const ListWrapper = styled.View`
  width: 100%;
  height: 40px;
  borderBottomWidth: 1px;
  borderBottomColor: ${transparentSilver};
`;

const NameWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  line-height: 30px;
`;

export const Name = createButton(NameWrapper, styled.Text``);

