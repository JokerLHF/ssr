import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from "react-router-config";

import Home from './containers/Home';
import Login from './containers/Login'


export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key: 'home',
  }, {
    path: "/login",
    component: Login,
    exact: true,
    key: 'login',
    // routes: [{
    //   path: "/login/ttt",
    //   component: () => { return <div>1</div> },
    //   exact: true,
    //   key: 'ttt'
    // }]
  }
]



const mapRoute = () => {
  return (
    <Switch>
      {
        routes.map(route => (
          <Route {...route} />
        ))
      }
    </Switch>
  )
}
export default mapRoute;