import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import profileViet from '../img/viet.jpg'
import profileTho from '../img/tho.jpg'
import profileHoang from '../img/hoang.jpg'


class Login extends Component {
  onLogin = (e) => {
    e.preventDefault()
    console.log(e.target.id)
  }

  render() {
    return (
      <div className='text-center'>
        <h3>LOGIN AS</h3>
        <ListGroup className='login-panel'>
          <ListGroup.Item action id='user1' onClick={this.onLogin} className='text-left'>
            <div className='user-name'>
              <img src={profileViet} alt='Viet'/>
              <p>Viet</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action id='user2' onClick={this.onLogin} className='text-left'>
            <div className='user-name'>
              <img src={profileHoang} alt='Hoang'/>
              <p>Hoang</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action id='user3' onClick={this.onLogin} className='text-left'>
            <div className='user-name'>
              <img src={profileTho} alt='Tho'/>
              <p>Tho</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    )
  }
}

export default Login