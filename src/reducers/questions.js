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
        ...state, // nothing has been done yet
      }
    case SAVE_ANSWER:
      const { qid, answer, authedUser } = action.questionWithAnswer
      let otherAnswer = answer === 'optionOne' ? 'optionTwo' : 'optionOne'

      console.log('qid = ', qid)
      console.log('answer = ', answer)
      console.log('authedUser = ', authedUser)

      console.log('state[qid] = ', state[qid])
      console.log('state[qid][answer][votes] = ', state[qid][answer].votes)
      
      let option1 = state[qid][answer].votes
      let option2 = state[qid][otherAnswer].votes
      console.log('option1 before', option1)
      console.log('option2 before', option2)

      let option1b = option1.filter((user) => user !== authedUser)
      let option2b = option2.filter((user) => user !== authedUser)
      console.log('option1 after', option1b)
      console.log('option2 after', option2b)

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