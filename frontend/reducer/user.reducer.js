//ES6 # state=true # initialise state à true si state est undefined
export default function user(state={}, action) {
  if (action.type == 'userSignin') {
    return action.user
  } else if (action.type == 'userSignup') {
    return action.user
  } else {
    return state;
  }
}
