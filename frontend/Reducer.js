export default function addFollower(state, action) {
  // L'objet action, contient obligatoirement un type. celui-ci nous permet de définir le type d'action.
  if (action.type == 'follow') {
    // Ici, nous récupérons le state.followings précédent pour le sauvegarder dans followings.
    var followings = [...state.followings];
    // Et nous y ajoutons ensuite, le nouveau following sur lequel nous venons de cliquer
    followings.push({name: action.name, email: action.email, company: action.company});
    // Une fois followings hydraté, nous le retournons
    state = ( { followings: followings } )
  } else {
    // Par défaut, si aucun type d'action n'est défini, followings est un tableau vide.
    followings = [];
    state = ( { followings: followings } )
  }
}
