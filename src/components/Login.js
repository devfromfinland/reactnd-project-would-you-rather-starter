import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import defaultProfilePhoto from '../img/tyler.jpg'
// import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    
  }

  onLogin = (e) => {
    e.preventDefault()
    console.log(e.currentTarget.id)

    // todo: update state authedUser

    // todo: redirect to either Dashboard or request URL
    // console.log('redirect to ', this.props.match.url)
    // this.setState(() => ({
    //   redirect: true
    // }))
  }

  render() {
    const { users } = this.props

    // if (this.state.redirect === true) {
    //   return <Redirect to={this.props.match.url} />
    // }

    return (
      <div className='text-center mt-5'>
        <h3>LOGIN AS</h3>
    
        <ListGroup className='login-panel'>
          { users && users.map((user) => 
            <ListGroup.Item key={user.id} action id={user.id} onClick={this.onLogin} className='text-left user-name'>
              <img src={defaultProfilePhoto} alt={user.name} />
              <p>{user.name}</p>
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    )
  }
}

export default Login