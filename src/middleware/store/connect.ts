const validateStore = function (store) {
  if (!store) {
    throw new Error('store cannot be undefined. \
      Make sure to pass the redux store as the only \
       argument of the constructor.');
  }
  if ( store.initialized) {
    throw new Error('Only one redux store can exist per application.');
  }
};


const decorateStore = function (store) {
  store.connect = function (subscriber) {
    return store.subscribe(() => subscriber(store.getState()));
  };
};

export const connect = (store) => {
  validateStore(store);
  store.initialized = true;
  decorateStore(store);
  return store;
};
