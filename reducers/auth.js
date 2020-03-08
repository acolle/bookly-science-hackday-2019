const auth = (state, action) => {
  switch (action.type) {
    case 'ACTIVE':
      return {
        uid: action.uid,
        username: action.username,
        email: action.email,
      }
    case 'SIGNUP':
      return {
        uid: action.uid,
        username: action.username,
        email: action.email,
      }
    case 'LOGIN':
      return {
        uid: action.uid,
        username: action.username,
        email: action.email,
      }
    default:
      return state;
  }
}

export { auth as default }
