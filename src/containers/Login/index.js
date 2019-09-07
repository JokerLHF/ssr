import React, { Component } from 'react';
import { renderRoutes } from "react-router-config";
import Header from '../../compoments/Header';

export default class Home extends Component {
  render () {
    // const childRoute = this.props.route.routes;
    return (
      <div>
        <Header />
        Login
        {/* {renderRoutes(childRoute)} */}
      </div>
    )
  }
}

