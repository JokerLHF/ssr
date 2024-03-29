import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import WidthStyles from '../../WidthStyle';
import { getHomeList } from './store/actionsCreator';

class Home extends Component {
  componentDidMount () {
    if (!this.props.homeReducer.newList.length) {
      this.props.getHomeListData();
    }
  }
  render () {
    const { name, newList } = this.props.homeReducer;
    return (
      <Fragment>
        <Helmet>
          <title>My Title</title>
          <meta name="ssr-home" content="这个是joker的ssr的首页" />
        </Helmet>
        <div>
          {'home ----' + name}
          {
            newList.map(item => {
              return (<div key={item._id}>{item._id} --- {item.news}</div>)
            })
          }
          <button onClick={() => { alert('1') }}>click</button>
        </div>
      </Fragment>

    )
  }
}

const mapStateToProps = state => ({
  homeReducer: state.home,
})
const mapDispatchToProps = (dispatch) => ({
  getHomeListData () {
    dispatch(getHomeList())
  }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(WidthStyles(Home));
ExportHome.loadData = (store) => {
  return store.dispatch(getHomeList())
}
export default ExportHome;

