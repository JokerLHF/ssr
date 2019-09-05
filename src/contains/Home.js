// import React from 'react'

import React, { Component } from 'react'

export default class Home extends Component {
  render () {
    console.log('11')
    return (
      <div>
        home
        <button onClick={() => { alert('1') }}>click</button>
      </div>
    )
  }
}

