import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import defaultProfilePhoto from '../img/tyler.jpg'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  onLogin = (e) => {
    e.preventDefault()

    const { dispatch } = this.props

    // update authedUser state
    dispatch(handleLogin(e.currentTarget.id))

    // redirect to the requested URL
    const currentURL = this.props.match.url
    this.props.history.push(currentURL)
  }

  render() {
    const { users } = this.props

    return (
      <div className='text-center mt-5'>
        <h3>LOGIN AS</h3>
    
        <ListGroup className='login-panel'>
          { users && users.map((user) => 
            <ListGroup.Item 
              key={user.id} 
              action id={user.id} 
              onClick={this.onLogin} 
              className='text-left user-name'>

              <img src={defaultProfilePhoto} alt={user.name} />
              <p>{user.name}</p>
              
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    users: Object.values(users)
  }
}

export default withRouter(connect(mapStateToProps)(Login))