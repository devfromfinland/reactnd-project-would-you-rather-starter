import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Navigation () {
  return (
    <Navbar className="justify-content-between mb-5">
      <Navbar.Collapse>
        <Nav.Link href='#'>Home</Nav.Link>
        <Nav.Link href='#'>Post a question</Nav.Link>
      </Navbar.Collapse>
      
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          Signed in as: <strong>Viet{/* {Username} */}</strong> (<a href="#">sign out</a>)
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}