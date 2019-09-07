import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
export const getStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk),
  );
}

export const getClientStore = () => {
  const defaultStore = window.context.state;
  return createStore(
    reducer,
    defaultStore,
    applyMiddleware(thunk),
  );
}