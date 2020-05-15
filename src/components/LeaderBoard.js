import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Table } from 'react-bootstrap'

class LeaderBoard extends Component {
  render() {
    const { users } = this.props

    let proceedUsers = [...users]
      .map((user) => ({...user, 'answered': Object.values(user.answers).length, 'asked': user.questions.length}))
      .sort((a, b) => (
      b.answered + b.asked - a.answered - a.asked
    ))

    return (
      <Container className='text-center'>
        <Row>
          <Col>
            <h3>Leader Board</h3>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col>
            <Table bordered hover striped>
              <thead className='thead-dark'>
                <tr>
                  <td>User</td>
                  <td># of questions asked</td>
                  <td># of questions answered</td>
                  <td>Total count</td>
                </tr>
              </thead>
              <tbody>
                { proceedUsers && proceedUsers.map((user) => 
                  <tr key={user.id}>
                    <td className='text-left'>
                      <img src={user.avatarURL} className='profile-leaderboard' alt={user.name} />
                      {user.name}
                    </td>
                    <td>{user.asked}</td>
                    <td>{user.answered}</td>
                    <td>{user.asked + user.answered}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(LeaderBoard)