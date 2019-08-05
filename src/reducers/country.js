export function country(state = {}, action) {
  switch (action.type) {
    case 'SET_COUNTRY':
      return action.country
    case 'CLEAR_COUNTRY':
      return {}
    default:
      return state
  }
}