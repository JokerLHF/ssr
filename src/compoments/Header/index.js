import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { layout, layIn } from './store/actionsCreator';

class Header extends Component {
  render () {
    const { headerReducer: { id, login }, layoutFunc, layInFunc } = this.props;
    return (
      <div>
        {
          login ? (
            <Fragment>
              <Link to="/">首页</Link>
              <div onClick={() => { layoutFunc(id) }}>退出</div>
            </Fragment>
          ) : <div onClick={() => { layInFunc(id) }}>登录</div>
        }
      </div>
    )
  }
}

Header.loadData = (store) => {
  return store.dispatch(getIsLogin())
}

const mapStateToProps = (state) => ({
  headerReducer: state.header
})
const mapDispatchToProps = (dispatch) => ({
  layoutFunc (id) {
    dispatch(layout(id))
  },
  layInFunc (id) {
    dispatch(layIn(id))
  },
})
//连接store
export default connect(mapStateToProps, mapDispatchToProps)(Header);



