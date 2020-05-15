import { saveQuestionAnswer, saveQuestion, getQuestions } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const REMOVE_ANSWER = 'REMOVE_ANSWER' // not provided by API in this project -> do nothing
export const REMOVE_QUESTION = 'REMOVE_QUESTION' // not provided by API in this project -> do nothing


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveQuestionAction (question) {
  return {
    type: SAVE_QUESTION,
    question, // {author, optionOneText, optionTwoText}
  }
}

export function removeQuestionAction (question) {
  return {
    type: REMOVE_QUESTION,
    question
  }
}

export function saveAnswer (questionWithAnswer) {
  return {
    type: SAVE_ANSWER,
    questionWithAnswer, // {authedUser, qid, answer}
  }
}

function removeAnswer(questionWithAnswer) {
  return {
    type: REMOVE_ANSWER,
    questionWithAnswer, // {authedUser, qid, answer }
  }
}

export function handleSaveAnswer(questionWithAnswer) {
  return (dispatch) => {
    dispatch(saveAnswer(questionWithAnswer))

    return saveQuestionAnswer(questionWithAnswer)
      .catch((e) => {
        console.warn('error in saving the answer')
        dispatch(removeAnswer(questionWithAnswer))
        alert('Error in saving the answer. Try again!')
      })
  }
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    return saveQuestion(question)
      .then((result) => dispatch(saveQuestionAction(result)))
      .catch((e) => {
        console.warn('error in saving the poll')
        dispatch(removeQuestionAction(question))
        alert('Error in saving the poll. Try again!')
      })
  }
}

export function retrieveQuestions() {
  return (dispatch) => {
    return getQuestions()
      .then(({questions}) => {
        dispatch(receiveQuestions(questions))
      })
      .catch((e) => {
        console.warn('error in getting the questions from server')
      })
  }
}