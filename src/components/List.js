import React from 'react';
import PropTypes from 'prop-types';

import {ListWrapper, Name} from '../styles/lists';

const List = ({item, handleClick}) => {
  return (
    <ListWrapper>
      <Name title={item.name} onPress={handleClick} />
    </ListWrapper>
  );
};

List.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default List;
