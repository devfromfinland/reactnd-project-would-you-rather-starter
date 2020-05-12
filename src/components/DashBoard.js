import React, { Component } from 'react'
import ListQuestions from './ListQuestions'
import { Container, Row, Col } from 'react-bootstrap'

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ListQuestions type='answered'/>
          </Col>
          <Col>
            <ListQuestions type='new'/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Dashboard