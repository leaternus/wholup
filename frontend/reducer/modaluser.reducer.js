//ES6 # state=true # initialise state à true si state est undefined
export default function modaluser(state=true, action) {
  if (action.type == 'hideModalSignin') {
    return false
  } else {
    return state;
  }
}
