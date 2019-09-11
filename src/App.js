import React, { Component } from 'react'
import Header from './compoments/Header';
import { renderRoutes } from "react-router-config";
export default class App extends Component {
  render () {
    const routeList = this.props.route.route;
    return (
      <div>
        <Header />
        {renderRoutes(routeList)}
      </div>
    )
  }
}
