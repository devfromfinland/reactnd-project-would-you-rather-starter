import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import defaultProfilePhoto from '../img/tyler.jpg'
import { connect } from 'react-redux'
import { handleLogin, setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    console.log('redirect to ', this.props.match.url)
  }

  onLogin = (e) => {
    e.preventDefault()

    const { dispatch } = this.props

    // update state authedUser
    dispatch(handleLogin(e.currentTarget.id))

    // todo: redirect to either Dashboard or requested URL
    const currentURL = this.props.match.url
    this.props.history.push(currentURL)
    // (currentURL === '/')
    //   ? this.props.history.push(`/dashboard`)
    //   : this.props.history.push(currentURL)
    
    console.log('redirect to ', this.props.match.url)
  }

  render() {
    const { users } = this.props
    console.log(this.props)

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

function mapStateToProps ({users}) {
  return {
    // empty
    users: Object.values(users)
  }
}

export default withRouter(connect(mapStateToProps)(Login))