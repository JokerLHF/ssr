// import React from 'react'

import React, { Component } from 'react'
import Header from '../../compoments/Header';
import { connect } from 'react-redux';

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        home
        {this.props.name}
        <button onClick={() => { alert('1') }}>click</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  name: state.name,
})

//连接store
export default connect(mapStateToProps, null)(Home);

