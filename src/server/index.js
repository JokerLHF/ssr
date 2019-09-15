import express from 'express';
import { render } from './utils';
import proxy from 'express-http-proxy';
import { getStore } from '../store/index';
import { matchRoutes } from "react-router-config";
import routes from '../Routes';


const app = express();
app.use(express.static('public'));

app.use('/api', proxy('http://127.0.0.1:5000', {
  proxyReqPathResolver: function (req) {
    return '/api' + req.url;   // 请求在'/nodeServer' 之后的内容
  }
}));

app.get('*', function (req, res) {

  const store = getStore();  // 把store抽取出来，方便传入
  const matchedRoutes = matchRoutes(routes, req.path);  // 匹配到当前路由的对应路由对象
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {   // 如果该组件有store
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      })
      promises.push(promise);
    }
    console.log(item.route);
    console.log('------------')
  });
  Promise.all(promises).then(() => {
    const context = { css: [] };
    const html = render(store, req, routes, context);
    if (context.action == 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.NOT_FOUND) {
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
  })

})


const server1 = app.listen(3033);