import React from 'react'
import Login from './components/Login'
import Dashboard from './components/DashBoard'


function App(props) {
  // todo: check if a user is logged in and the URL is in root
  let authedUser = '';
  authedUser = 'tylermcginnis'

  if (authedUser === '') {
    return (
      <Login />
    )
  } else {
    // load questions
    let questions2 = {
      "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
          votes: ['sarahedo'],
          text: 'have horrible short term memory',
        },
        optionTwo: {
          votes: [],
          text: 'have horrible long term memory'
        }
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'johndoe',
        timestamp: 1468479767190,
        optionOne: {
          votes: [],
          text: 'become a superhero',
        },
        optionTwo: {
          votes: ['johndoe', 'sarahedo'],
          text: 'become a supervillain'
        }
      },
      "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
          votes: [],
          text: 'be telekinetic',
        },
        optionTwo: {
          votes: ['sarahedo'],
          text: 'be telepathic'
        }
      },
      "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
          votes: [],
          text: 'be a front-end developer',
        },
        optionTwo: {
          votes: ['sarahedo'],
          text: 'be a back-end developer'
        }
      },
      "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
          votes: ['tylermcginnis'],
          text: 'find $50 yourself',
        },
        optionTwo: {
          votes: ['johndoe'],
          text: 'have your best friend find $500'
        }
      },
      "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
          votes: ['johndoe'],
          text: 'write JavaScript',
        },
        optionTwo: {
          votes: ['tylermcginnis'],
          text: 'write Swift'
        }
      },
    }
    let questions = Object.values(questions2)

    // load users
    let users2 = {
      sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: '../img/tho.jpg',
        answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
          "6ni6ok3ym7mf1p33lnez": 'optionTwo',
          "am8ehyc8byjqgar0jgpub9": 'optionTwo',
          "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
      },
      tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: '../img/viet.jpg',
        answers: {
          "vthrdm985a262al8qx3do": 'optionOne',
          "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
      },
      johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: '../img/hoang.jpg',
        answers: {
          "xj352vofupe1dqz9emx13r": 'optionOne',
          "vthrdm985a262al8qx3do": 'optionTwo',
          "6ni6ok3ym7mf1p33lnez": 'optionTwo'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
      }
    }
    let users = Object.values(users2)

    return (
      <Dashboard 
        questions={questions}
        users={users}
        authedUser={authedUser}/>
    )
  }
}

export default App