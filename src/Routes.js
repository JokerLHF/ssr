import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ExportHome from './containers/Home';
import Login from './containers/Login';
import ExportTranslation from './containers/Translation';
import NotFound from './NotFound';
import ExportApp from './App';

export default [
  {
    path: '/',
    component: ExportApp,
    loadData: ExportApp.loadData,
    routes: [
      {
        path: "/",
        component: ExportHome,
        exact: true,
        loadData: ExportHome.loadData,
        key: 'home',
      }, {
        path: "/login",
        component: Login,
        exact: true,
        key: 'login',
      }, {
        path: "/transtions",
        component: ExportTranslation,
        loadData: ExportTranslation.loadData,
        exact: true,
        key: 'transtions',
      }, {
        component: NotFound,
      }
    ]
  }
]
