import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Question from './Question'
import EmptyPage from './EmptyPage'

class QuestionPage extends Component {
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

  render () {
    // check if the link is valid (question is found). If not, then show 404 page
    if (this.props.question === undefined) {
      return <EmptyPage/>
    }

    const { authedUser, question } = this.props
    let { type } = this.props

    if (type === undefined) {
      // recheck the question if it is new or already answered
      (this.isAnsweredQuestion(question, authedUser))
        ? type = 'answered'
        : type = 'new'
    }
    
    return (
      <Container className='text-center mt-5'>
        <Row>
          <Col>
            <h3>Would you rather...?</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Question question={question} type={type}/>
          </Col>
        </Row>
        { type === 'answered' && 
          <Row className='mt-5'>
            {/* inform that there is no vote for optionOne */}
            { question.optionOne.votes.length === 0 && 
              <Col>
                <h4>No one has voted for</h4>
                <p className='option-detail'>"{question.optionOne.text}"</p>
              </Col>
            }

            {/* show optionOne's votes */}
            { question.optionOne.votes.length > 0 && 
              <Col>
                <h4>Users voted for</h4>
                <p className='option-detail'>"{question.optionOne.text}"</p>
                <ul className='list-user'>
                  {question.optionOne.votes.map((uid) => 
                    <li key={uid}>
                      {uid}
                    </li>
                  )}
                </ul>
              </Col>
            }

            {/* inform that there is no vote for optionTwo */}
            { question.optionTwo.votes.length === 0 && 
              <Col>
                <h4>No one has voted for</h4>
                <p className='option-detail'>"{question.optionTwo.text}"</p>
              </Col>
            }

            {/* show optionTwo's votes */}
            { question.optionTwo.votes.length > 0 && 
              <Col>
                <h4>Users voted for</h4>
                <p className='option-detail'>"{question.optionTwo.text}"</p>
                <ul className='list-user'>
                  {question.optionTwo.votes.map((uid) => 
                    <li key={uid}>
                      {uid}
                    </li>
                  )}
                </ul>
              </Col>
            }
          </Row>
        }
      </Container>
    )
  }
}

function mapStateToProps({authedUser, questions, users}, props) {
  return {
    authedUser,
    users: Object.values(users),
    question: Object.values(questions).filter((a) => a.id === props.match.params.id)[0],
    type: props.location.type
  }
}

export default connect(mapStateToProps)(QuestionPage)