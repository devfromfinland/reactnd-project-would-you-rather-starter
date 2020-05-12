export const RECEIVE_USERS = 'RECEIVE_USERS'

export function getUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}