import React, { Component, Fragment } from 'react'
import Login from './Login'
import Dashboard from './DashBoard'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Navigation from './Navigation'
import LeaderBoard from './LeaderBoard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EmptyPage from './EmptyPage'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    // get current state (default authedUser = '')
    this.props.dispatch(handleInitialData())
  }

  render() {
    let authedUser = this.props.authedUser
    if (authedUser === undefined || authedUser === null) {
      authedUser = ''
    }
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          { authedUser === '' && 
            <Fragment>
              {this.props.loading
                ? null
                : <Route path='*' render={(props) => <Login />} />
              }
            </Fragment>
          }

          { authedUser !== '' &&
          <Fragment>
            <Navigation authedUser={this.props.authedUser}/>
            {this.props.loading
                ? null
                : <Switch>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:id' component={QuestionPage} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={LeaderBoard}/>
                  <Route component={EmptyPage}/>
                </Switch>
            }
          </Fragment>
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === undefined || authedUser === null
  }
}

export default connect(mapStateToProps)(App)