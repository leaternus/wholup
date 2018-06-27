export default function following(state, action) {
  if (action.type == 'follow') {
    var followingsCopy = [...state];
    followingsCopy.push({name: action.name, email: action.email, company: action.company});
    return followingsCopy;
  } else {
    var followings = [];
    return followings;
  }
}
