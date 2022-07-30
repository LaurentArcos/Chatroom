import { createStore, applyMiddleware, compose } from 'redux';

import { loginMiddleware } from '../middlewares/middleware';
import reducer from './reducer';

// eslint-disable-next-line max-len
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myMiddleWares = composeEnhancers(applyMiddleware(loginMiddleware));

const store = createStore(
  reducer, /* preloadedState, */
  myMiddleWares,
);

export default store;
