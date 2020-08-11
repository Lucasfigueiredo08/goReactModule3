// import { createStore, compose, applyMiddleware } from 'redux';

// import reducers from './reducers';

// const createAppropriateStore =
//    process.env.NODE_ENV  === 'development' ? console.tron.createStore : createStore;

// const store = createAppropriateStore(reducers, compose(applyMiddleware(...[])));

// export default store;


import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...[]),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...[]);

const store = createStore(reducers, composer);

export default store;
