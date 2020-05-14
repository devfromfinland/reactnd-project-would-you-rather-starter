import React, { Component, Fragment } from 'react'
import Login from './Login'
import Dashboard from './DashBoard'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Navigation from './Navigation'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import EmptyPage from './EmptyPage'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  componentDidMount() {
    // todo: reset authedUser
    // console.log('should reset authedUser after mounted')

    // todo: get current state
    this.props.dispatch(handleInitialData())
    
    // get current URL
    // this.props.match.url
  }

  render() {
    return (
      <Router>
        <Fragment>
          {/* <Switch> */}
            { this.props.authedUser === '' && <Login />} 
            { this.props.authedUser !== '' &&
              <Fragment>
                <Navigation authedUser={this.props.authedUser}/>
                <Route path='/' exact component={Dashboard} />
                <Route path='/questions/:id' component={QuestionPage} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard}/>
                {/* <Route path='*'>
                  <EmptyPage />
                </Route> */}
              </Fragment>
            }
          {/* </Switch> */}
        </Fragment>
      </Router>
    )
  }
}
function mapStateToProps ({authedUser}) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App)