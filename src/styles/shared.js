import React from 'react';

import styled from 'styled-components/native';

export const createButton = (
  Touchable = styled.TouchableOpacity``,
  Text = styled.Text``,
) => ({title, ...props}) => (
  <Touchable {...props}>
    <Text {...props}>{title}</Text>
  </Touchable>
);
