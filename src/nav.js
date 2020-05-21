import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <Content className='Nav'>
        <Link to='/'>
          Landing Page
        </Link>
        <Link to='/climbLog'>
          Climb Log
        </Link>
        <Link to='/AddClimb'>
          Add Climb
        </Link>
      </Content>
    )
  }
}