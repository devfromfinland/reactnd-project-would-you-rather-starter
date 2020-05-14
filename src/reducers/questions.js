import { RECEIVE_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.id]: question,
      }
    case SAVE_ANSWER:
      const { qid, answer, authedUser } = action.questionWithAnswer
      let otherAnswer = answer === 'optionOne' ? 'optionTwo' : 'optionOne'
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            votes: [...state[qid][answer].votes, authedUser],
            text: state[qid][answer].text
          },
          [otherAnswer]: {
            votes: state[qid][otherAnswer].votes.filter((user) => user !== authedUser),
            text: state[qid][otherAnswer].text
          }
        }
      }
    default:
      return state
  }
}