import React, { Component } from 'react'

export default class NotFound extends Component {

  componentWillMount () {
    const { staticContext } = this.props;    // 客户端没有context对象, 
    staticContext && (staticContext.NOT_FOUND = true);
  }
  render () {
    return (
      <div>
        sorry, page is not Found
      </div>
    )
  }
}
