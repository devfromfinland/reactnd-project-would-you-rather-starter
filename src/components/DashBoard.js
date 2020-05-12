import React, { Component } from 'react'
import ListQuestions from './ListQuestions'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    console.log('Dashboard', this.props)
    return (
      <Container>
        <Row>
          <Col>
            <ListQuestions
              type='answered'
              questions={this.props.questions}
              users={this.props.users}
              authedUser={this.props.authedUser}/>
          </Col>
          <Col>
            <ListQuestions 
              type='new'
              questions={this.props.questions}
              users={this.props.users}
              authedUser={this.props.authedUser}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps ({users, questions, authedUser}) {
  return {
    authedUser,
    users: Object.values(users),
    questions: Object.values(questions)
  }
}

export default connect(mapStateToProps)(Dashboard)