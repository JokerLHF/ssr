import React from 'react';
import { renderToString, } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import ManageRoutes from '../Route';
const app = express();
app.use(express.static('public'));


app.get('/', function (req, res) {
  const content = renderToString((
    <StaticRouter location={req.path} context={{}}>
      <ManageRoutes />
    </StaticRouter>
  ));
  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="/index.js"></script>
    </html>
  `)
})
const server1 = app.listen(3000);