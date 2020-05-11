import React, { Fragment } from 'react'
// import Login from './components/Login'
import Navigation from './components/Navigation'
import ListQuestions from './components/ListQuestions'
import { Container, Row, Col } from 'react-bootstrap'


function App(props) {
  console.log(props)
  const authedUser = 'tylermcginnis'
  return (
    <Fragment>
      <Navigation />
      <Container>
        <Row>
          <Col>
            <ListQuestions
              type='answered'
              questions={props.questions}
              users={props.users}
              authedUser={authedUser}/>
          </Col>
          <Col>
            <ListQuestions 
              type='new'
              questions={props.questions}
              users={props.users}
              authedUser={authedUser}/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default App