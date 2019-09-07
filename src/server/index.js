import express from 'express';
import { render } from './utils/utils';
import { getStore } from '../store/index';
import { matchRoutes } from "react-router-config";
import { routes } from '../Routes';


const app = express();
app.use(express.static('public'));


app.get('*', function (req, res) {

  const store = getStore();  // 把store抽取出来，方便传入
  const matchedRoutes = matchRoutes(routes, req.path);  // 匹配到当前路由的对应路由对象
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {   // 如果该组件有store
      promises.push(item.route.loadData(store));
    }
  });
  Promise.all(promises).then(() => {
    res.send(render(store, req));
  })

})


const server1 = app.listen(3000);