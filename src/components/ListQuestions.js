import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Question from './Question'
import { connect } from 'react-redux'

class ListQuestions extends Component {
  isAnsweredQuestion = (question, authedUser) => {
    if (question.optionOne.votes.length > 0 && 
      question.optionOne.votes.find(user => user === authedUser)) {
      return true
    }

    if (question.optionTwo.votes.length > 0 && 
      question.optionTwo.votes.find(user => user === authedUser)) {
      return true
    }

    return false
  }

  render() {
    const { type, questions, authedUser } = this.props

    if (type === 'answered') {
      return (
        <Container className='list-questions'>
          <Row className='header-row mb-4'>
            <Col>
              <h3>Your answered questions</h3>
            </Col>
          </Row>
          { questions.length > 0 && questions
            .filter((item) => this.isAnsweredQuestion(item, authedUser)).map((question) => 
            <Row className='mb-5' key={question.id}>
              <Col>
                <Question question={question} type={type}/>
              </Col>
            </Row>
          )}
        </Container>
      )
    } else if (type === 'new') {
      return (
        <Container className='list-questions'>
          <Row className='header-row mb-4'>
            <Col>
              <h3>Would you rather?</h3>
            </Col>
          </Row>
          { questions && questions.filter((item) => 
            !this.isAnsweredQuestion(item, authedUser)).map((question) => 
            <Row className='mb-5' key={question.id}>
              <Col>
                <Question question={question} type={type}/>
              </Col>
            </Row>
          )}
        </Container>
      )
    } else {
      return <div>undefined</div>
    }
  }
}

function mapStateToProps({users, questions, authedUser}) {
  return {
    authedUser,
    users: Object.values(users),
    questions: Object.values(questions)
      .sort((a, b) => b.timestamp - a.timestamp)
  }
}

export default connect(mapStateToProps)(ListQuestions)