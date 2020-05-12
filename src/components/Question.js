import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { formatDate } from '../utils/helpers'
import { connect } from 'react-redux'

class Question extends Component {
  handleChangeOption = (e) => {
    e.preventDefault()

    const { question, authedUser } = this.props
    
    // do nothing if click on his/her own answer

    // change the choice of answered question, or create an answer for a new question

    // update to server

    alert('option clicked')
  }

  render() {
    const { type, question, authedUser } = this.props
    // const { id, author, optionOne, optionTwo, timestamp } = this.props.question

    // console.log(question)
    if (type === 'answered') { // question has been answered, then highlight the answer
      return (
        <div>
          {/* <p>ID: {question.id}</p> */}
          Posted by {' '}
          <a href='/something'>@{question.author}</a>
          {' '} on {formatDate(question.timestamp)}
          <ListGroup>
            { question.optionOne.votes.find(user => user === authedUser)
              ? <ListGroup.Item action active onClick={this.handleChangeOption}>{question.optionOne.text}</ListGroup.Item>
              : <ListGroup.Item action onClick={this.handleChangeOption}>{question.optionOne.text}</ListGroup.Item>}
            
            { question.optionTwo.votes.find(user => user === authedUser)
              ? <ListGroup.Item action active onClick={this.handleChangeOption}>{question.optionTwo.text}</ListGroup.Item>
              : <ListGroup.Item action onClick={this.handleChangeOption}>{question.optionTwo.text}</ListGroup.Item>}
          </ListGroup>
        </div>
      )
    } else { // question has not been answered, then no need to highlight anything
      return (
        <div>
          {/* <p>ID: {question.id}</p> */}
          Posted by {' '}
          <a href='/something'>@{question.author}</a>
          {' '} on {formatDate(question.timestamp)}
          <ListGroup>
            <ListGroup.Item action onClick={this.handleChangeOption}>{question.optionOne.text}</ListGroup.Item>
            <ListGroup.Item action onClick={this.handleChangeOption}>{question.optionTwo.text}</ListGroup.Item>
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