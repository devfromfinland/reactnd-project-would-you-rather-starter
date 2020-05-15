import { getUsers } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
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