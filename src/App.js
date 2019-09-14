import React, { Component } from 'react'
import Header from './compoments/Header';
import { renderRoutes } from "react-router-config";
import { connect } from 'react-redux';
import { getIsLogin } from '../src/compoments/Header/store/actionsCreator';


class App extends Component {
  render () {
    const routeList = this.props.route.routes;
    return (
      <div>
        <Header />
        {renderRoutes(routeList)}
      </div>
    )
  }
}


App.loadData = (store) => {
  return store.dispatch(getIsLogin())
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = (dispatch) => ({
  getIsLogin () {
    dispatch(getIsLogin())
  }
})
//连接store
export default connect(mapStateToProps, mapDispatchToProps)(App);
