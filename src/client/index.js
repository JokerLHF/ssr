import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ManageRoutes from '../Route.js';

const App = () => {
  return (
    <BrowserRouter>
      <ManageRoutes />
    </BrowserRouter>
  )
}
ReactDom.hydrate(<App />, document.getElementById('root'));