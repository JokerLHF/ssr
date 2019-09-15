import React, { Component } from 'react'
import Header from './compoments/Header';
import { renderRoutes } from "react-router-config";
import { connect } from 'react-redux';
import { getIsLogin } from '../src/compoments/Header/store/actionsCreator';
import styles from './App.less';
import WidthStyles from './WidthStyle';
class App extends Component {

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




const mapStateToProps = state => ({

})
const mapDispatchToProps = (dispatch) => ({
  getLogin (id) {
    dispatch(getIsLogin(id))
  }
})
//连接store
const ExportApp = connect(mapStateToProps, mapDispatchToProps)(WidthStyles(App, styles));
ExportApp.loadData = (store) => {
  return store.dispatch(getIsLogin(1))
}
export default ExportApp;
