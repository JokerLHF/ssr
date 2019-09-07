import React from 'react';
import { renderToString, } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import mapRoute from '../../Routes';
export const render = (store, req) => {

  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {mapRoute()}
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