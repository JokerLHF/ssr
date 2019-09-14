import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getTranstionList } from './store/actionsCreator';

class Translation extends Component {
  componentDidMount () {
    const { transReducer: { translationList }, getTransList } = this.props;
    if (translationList.length) {
      getTransList();
    }
  }

  renderData (data) {
    return (
      <Fragment>
        {
          data.map(item => {
            return (
              <div key={item._id}>{item._id} --- {item.key}</div>
            )
          })
        }
      </Fragment>
    )
  }
  render () {
    const { transReducer: { translationList }, headerReducer: { login } } = this.props;
    return (
      <div>
        {login ? (<div>{this.renderData(translationList)}</div>) : <Redirect to="/" />}
      </div>
    )
  }
}

Translation.loadData = (store) => {
  return store.dispatch(getTranstionList());
}

const mapStateToProps = state => ({
  headerReducer: state.header,
  transReducer: state.trans,
})
const mapDispatchToProps = (dispatch) => ({
  getTransList () {
    dispatch(getTranstionList());
  }
})
//连接store
export default connect(mapStateToProps, mapDispatchToProps)(Translation);

