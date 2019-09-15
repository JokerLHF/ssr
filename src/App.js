import React, { Component } from 'react'
import Header from './compoments/Header';
import { renderRoutes } from "react-router-config";
import { connect } from 'react-redux';
import { getIsLogin } from '../src/compoments/Header/store/actionsCreator';
import styles from './App.css';

class App extends Component {
  componentWillMount () {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.css.push(styles._getCss());
    }
  }
  render () {
    const { staticContext } = this.props;
    const routeList = this.props.route.routes;
    return (
      <div className={styles.outDiv}>
        <Header staticContext={staticContext} />
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
