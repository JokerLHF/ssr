import React, { Component } from 'react'
import Header from '../../compoments/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actionsCreator';
class Home extends Component {
  componentDidMount () {
    this.props.getHomeList();
  }
  render () {
    const { name, newList } = this.props.homeReducer;
    return (
      <div>
        <Header />
        {'home ----' + name}
        {
          newList.map(item => {
            return (<div key={item.id}>{item.name}</div>)
          })
        }
        <button onClick={() => { alert('1') }}>click</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  homeReducer: state.home,
})
const mapDispatchToProps = (dispatch) => ({
  getHomeList () {
    dispatch(getHomeList())
  }
})
//连接store
export default connect(mapStateToProps, mapDispatchToProps)(Home);

