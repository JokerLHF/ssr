import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import clientAxios from '../client/request';
import serverAxios from '../server/request';
export const getStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios)),
  );
}

export const getClientStore = () => {
  const defaultStore = window.context.state;
  return createStore(
    reducer,
    defaultStore,
    applyMiddleware(thunk.withExtraArgument(clientAxios)),
  );
}