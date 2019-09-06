import React from 'react';
import { renderToString, } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ManageRoutes from '../../Routes';
import getStore from '../../store/index';
export const render = (req) => {

  const content = renderToString((
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>
        {ManageRoutes}
      </StaticRouter>
    </Provider>
  ));

  return `
  <html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
    <script src="/index.js"></script>
  </html>
`
}