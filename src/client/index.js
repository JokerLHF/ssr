import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import routes from '../Routes';
import { renderRoutes } from "react-router-config";

import { Provider } from 'react-redux';
import { getClientStore } from '../store/index';

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
}
ReactDom.hydrate(<App />, document.getElementById('root'))