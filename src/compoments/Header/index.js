import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { layout, layIn, getIsLogin } from './store/actionsCreator';
import WidthStyles from '../../WidthStyle';
import styles from './index.less';
class Header extends Component {

  render () {
    const { headerReducer: { id, login }, layoutFunc, layInFunc } = this.props;
    return (
      <div className={styles.firstDiv}>
        {
          login ? (
            <Fragment>
              <Link to="/" className={styles['div-item']}>首页</Link>
              <Link to="/transtions" className={styles['div-item']}>翻译列表</Link>
              <div onClick={() => { layoutFunc(id) }} className={styles['div-item']}>退出</div>
            </Fragment>
          ) : <div onClick={() => { layInFunc(1) }} className={styles['div-item']}>登录</div>
        }
      </div>
    )
  }
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


const ExportHeader = connect(mapStateToProps, mapDispatchToProps)(WidthStyles(Header, styles));
export default ExportHeader;