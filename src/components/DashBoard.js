import React, { Fragment } from 'react'
// import Login from './components/Login'
import Navigation from './Navigation'
import ListQuestions from './ListQuestions'
import { Container, Row, Col } from 'react-bootstrap'


function Dashboard(props) {
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
              authedUser={props.authedUser}/>
          </Col>
          <Col>
            <ListQuestions 
              type='new'
              questions={props.questions}
              users={props.users}
              authedUser={props.authedUser}/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Dashboard