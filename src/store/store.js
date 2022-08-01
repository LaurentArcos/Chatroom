import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import messages from 'src/store/messages';
import loginForm from 'src/store/loginForm';
import auth from 'src/store/auth';
import { loginMiddleware, messagesMiddleware } from '../middlewares/middleware';

// eslint-disable-next-line max-len
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myMiddleWares = composeEnhancers(
  applyMiddleware(loginMiddleware, messagesMiddleware),
);

const reducer = combineReducers({
  messages,
  loginForm,
  auth,
});

const store = createStore(
  reducer, /* preloadedState, */
  myMiddleWares,
);

export default store;
