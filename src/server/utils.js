import React from 'react';
import { renderToString, } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux';
export const render = (store, req, routes) => {

  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {renderRoutes(routes)}
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
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
    </body>
    <script src="/index.js"></script>
  </html>
`
}