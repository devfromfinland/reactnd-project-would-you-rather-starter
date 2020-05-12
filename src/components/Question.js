import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { formatDate } from '../utils/helpers'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'

class Question extends Component {
  handleChangeOption = (e) => {
    e.preventDefault()

    // do nothing if click on his/her own answer
    const isActive = e.target.classList.contains('active')
    console.log('isActive = ', isActive)

    if (!isActive) {
      const { question, authedUser, dispatch } = this.props
      let answer = e.target.dataset.option
      let questionWithAnswer = {authedUser, qid: question.id, answer}

      // update to state and server
      dispatch(handleSaveAnswer(questionWithAnswer))
    }
  }

  render() {
    const { type, question, authedUser } = this.props
    // const { id, author, optionOne, optionTwo, timestamp } = this.props.question

    // console.log(question)
    if (type === 'answered') { // question has been answered, then highlight the answer
      return (
        <div>
          <p>ID: {question.id}</p>
          Posted by {' '}
          <a href='/something'>@{question.author}</a>
          {' '} on {formatDate(question.timestamp)}
          <ListGroup>
            { question.optionOne.votes.find(user => user === authedUser)
              ? <ListGroup.Item action data-option='optionOne' active onClick={this.handleChangeOption}>{question.optionOne.text}</ListGroup.Item>
              : <ListGroup.Item action data-option='optionOne' onClick={this.handleChangeOption}>{question.optionOne.text}</ListGroup.Item>}
            
            { question.optionTwo.votes.find(user => user === authedUser)
              ? <ListGroup.Item action data-option='optionTwo' active onClick={this.handleChangeOption}>{question.optionTwo.text}</ListGroup.Item>
              : <ListGroup.Item action data-option='optionTwo' onClick={this.handleChangeOption}>{question.optionTwo.text}</ListGroup.Item>}
          </ListGroup>
        </div>
      )
    } else { // question has not been answered, then no need to highlight anything
      return (
        <div>
          <p>ID: {question.id}</p>
          Posted by {' '}
          <a href='/something'>@{question.author}</a>
          {' '} on {formatDate(question.timestamp)}
          <ListGroup>
            <ListGroup.Item action data-option='optionOne' onClick={this.handleChangeOption}>{question.optionOne.text}</ListGroup.Item>
            <ListGroup.Item action data-option='optionTwo' onClick={this.handleChangeOption}>{question.optionTwo.text}</ListGroup.Item>
          </ListGroup>
        </div>
      )
    }
  }
}

function mapStateToProps({users, authedUser}) {
  return {
    authedUser,
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(Question)