const createAccessActions = prefix => ({
  SET: `${prefix}.SET`,
  DELETE: `${prefix}.DELETE`,
});

const createListActions = prefix => ({
  SET: `${prefix}.SET`,
  ADD: `${prefix}.ADD`,
  TOGGLE: `${prefix}.TOGGLE`,
  UPDATE: `${prefix}.UPDATE`,
  DELETE: `${prefix}.DELETE`,
  REMOVE: `${prefix}.REMOVE`,
});

export const auth = {
  USER: createAccessActions('USER'),
  ERROR: createAccessActions('ERROR'),
};

export const todos = {
  LIST: {...createListActions('TODO'), MOVE: 'TODO.MOVE'},
};

export const lists = {
  PERSONAL: createListActions('PERSONAL'),
  SHARED: createListActions('SHARED'),
  ACTIVE: createAccessActions('ACTIVE'),
};

export const localStorage = createAccessActions('LOCAL_STORAGE');

export const share = {
  LIST: createAccessActions('SHARE_LIST'),
  USERS: createAccessActions('SHARE_USER'),
};
