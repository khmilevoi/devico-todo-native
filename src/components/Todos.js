import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {getTodos, toggle, del, update, move, add} from '../store/actions/todo';

import {
  TodosWrapper,
  TodoWrapper,
  Inner,
  ListWrapper,
  DeleteButton,
  AddButtonWrapper,
  InnerInput,
  AddButton,
} from '../styles/todos';

import CheckBox from '@react-native-community/checkbox';

export const Todos = ({
  getTodos,
  list,
  user,
  toggle,
  del,
  add,
  update,
  active,
  move,
}) => {
  const [inner, setInner] = useState('');

  useEffect(() => {
    if (active.id && !list && user) {
      getTodos(active.id, user.token);
    }
  }, [active.id, list, getTodos, user]);

  if (!user || !list) {
    return null;
  }

  return (
    <TodosWrapper>
      <ListWrapper>
        {list.map(item => (
          <TodoWrapper key={item.id}>
            <CheckBox
              value={item.completed}
              disabled={active.creator !== user.id && !active.isPublic}
              onChange={() => toggle(item.id, user.token)}
            />
            <Inner>{item.inner}</Inner>
            <DeleteButton onPress={() => del(item.id, user.token)} />
          </TodoWrapper>
        ))}
      </ListWrapper>

      <AddButtonWrapper>
        <InnerInput
          placeholder="type text..."
          value={inner}
          onChangeText={text => setInner(text)}
          disabled={!active || (user.id !== active.creator && !active.isPublic)}
        />
        <AddButton
          title="+"
          onPress={() => {
            if (list) {
              const last = list[list.length - 1];
              const id = (last && last.id) || null;

              add(active.id, inner, id, user.token);
              setInner('');
            }
          }}
        />
      </AddButtonWrapper>
    </TodosWrapper>
  );
};

Todos.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  active: PropTypes.shape({
    id: PropTypes.number,
    creator: PropTypes.number,
    isPublic: PropTypes.bool,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    token: PropTypes.string.isRequired,
  }),
  getTodos: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  list: state.todos.list[state.lists.active && state.lists.active.id],
  active: state.lists.active || {},
  user: state.auth.user,
});

const mapDispatchToProps = {
  getTodos,
  toggle,
  del,
  add,
  update,
  move,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
