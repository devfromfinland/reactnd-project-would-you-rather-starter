import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { handleSaveQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const author = this.props.authedUser
    const { optionOneText, optionTwoText } = this.state
    const question = {author, optionOneText, optionTwoText}
    const { dispatch } = this.props

    dispatch(handleSaveQuestion(question))

    this.setState(() => ({
      toHome: true
    }))
  }

  render() {
    if (this.state.toHome === true) return <Redirect to='/' />

    return (
      <form onSubmit={this.handleSubmit}>
        <Container className='mt-5 text-center'>
          <Row>
            <Col>
              <h3>Would you rather...?</h3>
            </Col>
          </Row>
          <Row className='mt-4 mb-3'>
            <Col className='text-right pr-2'>Option #1:</Col>
            <Col xs={7} className='text-left pl-2'>
              <input
                type='text'
                onChange={(e) => this.setState({optionOneText: e.target.value})}
                value={this.state.optionOneText}
                placeholder='Enter option #1 here'
              /></Col>
          </Row>
          <Row className='mb-3'>
            <Col className='text-right pr-2'>Option #2:</Col>
            <Col xs={7} className='text-left pl-2'>
              <input
                type='text'
                onChange={(e) => this.setState({optionTwoText: e.target.value})}
                value={this.state.optionTwoText}
                placeholder='Enter option #2 here'
              /></Col>
          </Row>
          <Row className='mb-3'>
            <Col className='text-right pr-2'></Col>
            <Col xs={7} className='text-left pl-2'>
              <button type='submit'>Submit</button>  
            </Col>
          </Row>
        </Container>
      </form>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))