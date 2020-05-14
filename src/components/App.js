import React, { Component, Fragment } from 'react'
import Login from './Login'
import Dashboard from './DashBoard'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Navigation from './Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
    // console.log('URL in App component: ', this.props)
  }

  render() {
    // console.log('props App component, before render: ', this.props)
    return (
      <Router>
        <Fragment>
          
            { this.props.authedUser === '' && 
              <Route path='*' render={(props) => <Login />} />
            }

            { this.props.authedUser !== '' &&
            <Fragment>
              <Navigation authedUser={this.props.authedUser}/>
              <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/questions/:id' component={QuestionPage} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard}/>
                <Route component={EmptyPage}/>
              </Switch>
            </Fragment>
            }
          
        </Fragment>
      </Router>
    )
  }
}

// function mapStateToProps ({authedUser}, props) {
//   return {
//     ...props,
//     authedUser,
//   }
// }

function mapStateToProps( { authedUser }, props) {
  
  return {
    ...props,
    authedUser,
  }
}

export default connect(mapStateToProps)(App)