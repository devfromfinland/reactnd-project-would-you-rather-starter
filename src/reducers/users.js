import { RECEIVE_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case SAVE_USER_ANSWER:
      // console.log('state in User reducer: ', state)
      const { qid, answer, authedUser } = action.questionWithAnswer
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    case SAVE_USER_QUESTION:
      const { question } = action

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: [
            ...state[question.author].questions,
            question.id
          ]
        }
      }
    default:
      return state
  }
}