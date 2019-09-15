import React from 'react';
import { renderToString, } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux';
export const render = (store, req, routes, context) => {

  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  ));
  const cssStr = context.css.length ? context.css.join('\n') : '';
  return `
  <html>
    <head>
      <title>ssr</title>
      <style>${cssStr}</style>
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