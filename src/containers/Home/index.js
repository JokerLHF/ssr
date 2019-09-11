import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../../compoments/Header';
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
      <div>
        <Header />
        {'home ----' + name}
        {
          newList.map(item => {
            return (<div key={item.id}>{item.url}</div>)
          })
        }
        <button onClick={() => { alert('1') }}>click</button>
      </div>
    )
  }
}

Home.loadData = (store) => {
  return store.dispatch(getHomeList())
}

const mapStateToProps = state => ({
  homeReducer: state.home,
})
const mapDispatchToProps = (dispatch) => ({
  getHomeListData () {
    dispatch(getHomeList())
  }
})
//连接store
export default connect(mapStateToProps, mapDispatchToProps)(Home);

