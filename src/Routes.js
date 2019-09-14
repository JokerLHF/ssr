import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Translation from './containers/Translation';
import NotFound from './NotFound';
import App from './App';

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
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
      }, {
        path: "/transtions",
        component: Translation,
        loadData: Translation.loadData,
        exact: true,
        key: 'transtions',
      }, {
        component: NotFound,
      }
    ]
  }
]
