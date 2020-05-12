import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const REMOVE_ANSWER = 'REMOVE_ANSWER'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveQuestion (question) {
  return {
    type: SAVE_QUESTION,
    question,
    // author,
    // optionOneText,
    // optionTwoText,
  }
}

export function saveAnswer (questionWithAnswer) {
  console.log(' in action ', questionWithAnswer)
  return {
    type: SAVE_ANSWER,
    questionWithAnswer,
    // authedUser,
    // qid,
    // answer,
  }
}

function removeAnswer(questionWithAnswer) {
  // api doesn't provide in this project  
  return {
    type: REMOVE_ANSWER,
    questionWithAnswer,
    // authedUser,
    // qid,
    // answer,
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