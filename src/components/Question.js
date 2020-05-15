import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { formatDate } from '../utils/helpers'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'
import { handleSaveUserAnswer } from '../actions/users'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  state = {
    refresh: false
  }

  handleChangeOption = (e) => {
    e.preventDefault()

    const { question, authedUser, dispatch } = this.props
    let answer = e.target.dataset.option
    let questionWithAnswer = {authedUser, qid: question.id, answer}

    // update the question in state and server
    dispatch(handleSaveAnswer(questionWithAnswer))

    // update the user's answer in server (fix Leaderboard bug)
    dispatch(handleSaveUserAnswer(questionWithAnswer))

    // check if user is in the detailed page, then redirect to homepage
    if (this.props.match && this.props.match.params.id) {
      // this.props.history.push('/')
      this.setState(() => ({
        refresh: true
      }))
    }
  }

  handleCheat = () => {
    alert('you already vote, no cheating')
  }

  render() {
    
    const { question, authedUser, users } = this.props
    let { type } = this.props
    const countOne = question.optionOne.votes.length
    const countTwo = question.optionTwo.votes.length
    const countOnePercentage = (countOne * 100 / (countOne + countTwo)).toFixed(2)
    const countTwoPercentage = (countTwo * 100 / (countOne + countTwo)).toFixed(2)

    let isQuestionPage = false
    if (this.props.match && this.props.match.params.id) {
      isQuestionPage = true

      // if a user answer a question in the QuestionPage, then refresh and show results
      if (this.state.refresh === true) {
        type = 'answered'
        // should change the type of QuestionPage component as well
      }
    }

    if (type === 'answered') { 
      // question has been answered, then highlight the answer
      return (
        <div>
          Posted by
          {' '} <img src={users[question.author].avatarURL} alt='profile-pic' className='small-profile-pic'/>
          {' '} @{question.author}
          {' '} on {formatDate(question.timestamp)}
          { isQuestionPage === false && 
            <div style={{float: 'right'}}>
              <Link to={{
                pathname: '/questions/' + question.id,
                type: 'answered'
                }}>
                Details
              </Link>
            </div>
          }
          <ListGroup>
            { question.optionOne.votes.find(user => user === authedUser)
              ? <ListGroup.Item action data-option='optionOne' active onClick={this.handleCheat}>
                  {question.optionOne.text}
                  <div className='percentage pl-1'>
                    {countOne} vote{countOne > 1 ? 's' : ''} ({countOnePercentage}%)
                  </div>
                </ListGroup.Item>
              : <ListGroup.Item action data-option='optionOne' onClick={this.handleCheat}>
                  {question.optionOne.text}
                  <div className='percentage pl-1'>
                    {countOne} vote{countOne > 1 ? 's' : ''} ({countOnePercentage}%)
                  </div>
                </ListGroup.Item>}
            
            { question.optionTwo.votes.find(user => user === authedUser)
              ? <ListGroup.Item action data-option='optionTwo' active onClick={this.handleCheat}>
                  {question.optionTwo.text}
                  <div className='percentage pl-1'>
                    {countTwo} vote{countTwo > 1 ? 's' : ''} ({countTwoPercentage}%)
                  </div>
                </ListGroup.Item>
              : <ListGroup.Item action data-option='optionTwo' onClick={this.handleCheat}>
                  {question.optionTwo.text}
                  <div className='percentage pl-1'>
                    {countTwo} vote{countTwo > 1 ? 's' : ''} ({countTwoPercentage}%)
                  </div>
                </ListGroup.Item>}
          </ListGroup>
        </div>
      )
    } else {
      // question has not been answered, then no need to highlight anything
      
      return (
        <div>
          Posted by
          {' '} <img src={users[question.author].avatarURL} alt='profile-pic' className='small-profile-pic'/>
          {' '} @{question.author}
          {' '} on {formatDate(question.timestamp)}
          { isQuestionPage === false && 
            <div style={{float: 'right'}}>
              <Link to={{
                pathname: '/questions/' + question.id,
                type: 'new'
                }}>
                Details
              </Link>
            </div>
          }
          <ListGroup>
            <ListGroup.Item action data-option='optionOne' onClick={this.handleChangeOption}>{question.optionOne.text}</ListGroup.Item>
            <ListGroup.Item action data-option='optionTwo' onClick={this.handleChangeOption}>{question.optionTwo.text}</ListGroup.Item>
          </ListGroup>
        </div>
      )
    }
  }
}

function mapStateToProps({users, authedUser}, {question}) {
  return {
    authedUser,
    users,
    question
  }
}

export default withRouter(connect(mapStateToProps)(Question))