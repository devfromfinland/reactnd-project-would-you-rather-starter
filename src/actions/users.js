import { getUsers, saveQuestionAnswer } from '../utils/api'

export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function saveUserAnswer (questionWithAnswer) {
  return {
    type: SAVE_USER_ANSWER,
    questionWithAnswer, // {authedUser, qid, answer}
  }
}

export function saveUserQuestion (question) {
  return {
    type: SAVE_USER_QUESTION,
    question,
  }
}

export function handleSaveUserAnswer(questionWithAnswer) {
  return (dispatch) => {
    dispatch(saveUserAnswer(questionWithAnswer))

    return saveQuestionAnswer(questionWithAnswer)
      .catch((e) => {
        console.warn('error in saving the User Answer')
      })
  }
}

export function handleSaveUserQuestion(question) {
  return (dispatch) => {
    dispatch(saveUserQuestion(question))

    // update database?
  }
}

export function retrieveUsers() {
  return (dispatch) => {
    return getUsers()
      .then(({users}) => {
        dispatch(receiveUsers(users))
      })
      .catch((e) => {
        console.warn('error in getting the users from server')
      })
  }
}