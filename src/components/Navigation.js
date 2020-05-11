import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navigation (props) {
  let { authedUser } = props
  return (
    <Navbar className="justify-content-between mb-5">
      <Navbar.Collapse>
        <NavLink to='/' exact className='nav-link' activeClassName='active'>Home</NavLink>
        <NavLink to='/new' className='nav-link' activeClassName='active'>Post a question</NavLink>
      </Navbar.Collapse>
      
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          Signed in as: <strong>{authedUser}</strong> (<a href="#">sign out</a>)
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}