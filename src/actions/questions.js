export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

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
  return {
    type: SAVE_ANSWER,
    questionWithAnswer,
    // authedUser,
    // qid,
    // answer,
  }
}