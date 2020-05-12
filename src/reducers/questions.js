import { RECEIVE_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION:
      return {
        ...state // nothing has been done yet
      }
    case SAVE_ANSWER:
      return {
        ...state // nothing has been done yet
      }
    default:
      return state
  }
}