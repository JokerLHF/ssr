// import React from 'react'

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Header extends Component {
  render () {
    return (
      <div>
        <Link to="/">home</Link>
        <br />
        <Link to="/login">Login</Link>
      </div>
    )
  }
}
