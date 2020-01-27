import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {getTodos, toggle, del, update, move, add} from '../store/actions/todo';

import {TodosWrapper, TodoWrapper, Inner} from '../styles/todos';
import {CheckBox} from 'react-native';

export const Todos = ({
  getTodos,
  list,
  user,
  toggle,
  del,
  update,
  active,
  move,
}) => {
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
      {list.map(item => (
        <TodoWrapper key={item.id}>
          <CheckBox
            value={item.completed}
            disabled={active.creator !== user.id && !active.isPublic}
            onChange={() => toggle(item.id, user.token)}
          />
          <Inner>{item.inner}</Inner>
        </TodoWrapper>
      ))}
    </TodosWrapper>
  );
};

Todos.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  active: PropTypes.shape({
    id: PropTypes.string,
    creator: PropTypes.string,
    isPublic: PropTypes.bool,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
