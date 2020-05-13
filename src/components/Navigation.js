import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { handleLogOut } from '../actions/authedUser'
import { connect } from 'react-redux'

class Navigation extends Component {
  onLogOut = (e) => {
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(handleLogOut(''))
  }
  render() {
    return (
      <Navbar className="justify-content-between mb-5">
        <Navbar.Collapse>
          <NavLink to='/' exact className='nav-link' activeClassName='active'>Home</NavLink>
          <NavLink to='/add' className='nav-link' activeClassName='active'>Post a question</NavLink>
        </Navbar.Collapse>
        
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Signed in as: <strong>{this.props.authedUser}</strong> (<div className='btn btn-link' onClick={this.onLogOut}>Logout</div>)
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Navigation)