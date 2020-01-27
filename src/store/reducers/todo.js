import {initialState} from '../../constants/initialState';
import {todos} from '../../constants/actionTypes';

export const todosReducer = (state = initialState.todos, {type, payload}) => {
  switch (type) {
    case todos.LIST.SET: {
      const list = {...state.list, [payload.list]: payload.res};

      return {
        ...state,
        list,
      };
    }

    case todos.LIST.REMOVE: {
      const list = {...state.list};

      delete list[payload];

      return {...state, list};
    }

    case todos.LIST.ADD: {
      const list = {...state.list};

      if (list[payload.list]) {
        const todos = [...list[payload.list]];
        todos.push(payload.res);

        list[payload.list] = todos;
      }

      return {...state, list};
    }

    case todos.LIST.TOGGLE: {
      const list = {...state.list};

      if (list[payload.list]) {
        list[payload.list] = list[payload.list].map(item =>
          item.id === payload.id ? {...item, completed: !item.completed} : item,
        );
      }

      return {...state, list};
    }

    case todos.LIST.DELETE: {
      const list = {...state.list};

      if (list[payload.list]) {
        list[payload.list] = list[payload.list].filter(
          item => item.id !== payload.id,
        );
      }

      return {...state, list};
    }

    case todos.LIST.UPDATE: {
      const list = {...state.list};

      if (list[payload.list]) {
        list[payload.list] = list[payload.list].map(item =>
          item.id === payload.id ? {...item, inner: payload.inner} : item,
        );
      }

      return {...state, list};
    }

    default: {
      return state;
    }
  }
};
