export const withSocket = (store, params, socket) => {
  Object.entries(params).forEach(([event, listener]) => {
    socket.on(event, (...args) =>
      listener(store.dispatch, store.getState, ...args),
    );
  });

  return store;
};
