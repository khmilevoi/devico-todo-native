const clone = value => {
  if (typeof value !== 'object' || value == null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => clone(item));
  }

  return Object.entries(value).reduce((cloned, [key, current]) => {
    cloned[key] = clone(current);

    return cloned;
  }, {});
};

export const logger = ({getState, dispatch}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  const state = getState();
  const time = new Date();

  console.group(
    'LOGGER: ',
    `${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}`,
  );

  console.log('ACTION: ', action);

  console.groupCollapsed('STATE: ');

  Object.entries(state).forEach(([key, value]) => {
    console.log(`\t${key.toUpperCase()}: `, clone(value));
  });

  console.groupEnd();

  console.groupEnd();

  return next(action);
};
