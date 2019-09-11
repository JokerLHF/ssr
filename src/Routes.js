import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login'
import App from './App';

export const routes = [
  {
    path: '/',
    component: App,
    route: [
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
      }
    ]
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