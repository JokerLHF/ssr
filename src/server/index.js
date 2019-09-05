import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import Home from '../contains/Home.js';

const app = express();
app.use(express.static('public'));
const content = renderToString(<Home />);
app.get('/', function (req, res) {
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