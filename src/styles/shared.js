import React from 'react';

export const createButton = (Touchable, Text) => ({title, ...props}) => (
  <Touchable {...props}>
    <Text {...props}>{title}</Text>
  </Touchable>
);
