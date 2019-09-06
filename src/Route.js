import { Route } from 'react-router-dom';
import React from 'react'
import Home from './contains/Home';


const ManageRoutes = () => {
  return (
    <div>
      <Route path="/" exect component={Home}></Route>
    </div>
  )
}
export default ManageRoutes;