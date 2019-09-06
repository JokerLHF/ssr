import { Route } from 'react-router-dom';
import React from 'react'
import Home from './contains/Home';
import Login from './contains/Login';

const ManageRoutes = () => {
  return (
    <div>
      <Route path="/" exect component={Home}></Route>
      <Route path="/login" exect component={Login}></Route>
    </div>
  )
}
export default ManageRoutes;