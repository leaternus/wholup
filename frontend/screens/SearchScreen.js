import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { List, ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';


class SearchScreen extends React.Component {
  // Ici, nous appelons notre constructeur, qui prend un "props" par convention
  constructor(props) {
    super(props);
    // Ici, on définit notre liste de states. En l'occurence, un tableau users vide.
    this.state = {
      users: [] ,

      bgColor: [
              '#ce467f',
              '#07dfea',
              '#07ea5e',
              '#f40789',
              '#ce04c4',
              '#ed95d2',
              '#e89d9d',
              '#5cc4ac',
              '#acbf61',
              '#dd884f',
              ]
    };
  }
  static navigationOptions = {
    title: 'Search',
    header: null
  };
  // Le componentDidMount est appelé après le chargement du component
  componentDidMount() {
    // Ici, nous sauvegardons la valeur de this dans ctx, afin de pouvoir y accéder depuis notre fonction fetch
    const ctx = this;
    // Ici, nous effectuons un appel asynchrone (fetch) de l'url qui contient notre liste d'utilisateurs
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(data) {
      // Une fois, la data récupérée, nous la transformons en json
      return data.json();
    })
    .then(function(response) {
      // Une fois transformée, en json, nous passons la data à notre state de users.
      ctx.setState({ users: response });
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  render() {
    // Ici, nous bouclons sur notre this.state.users, dont nous passons le contenu à la variable users.
    // Nous y créeons une variable i, qui nous servira de clé unique (key={i}) pour chacun des <ListItem>.
    // Lors d'un clic, sur un ListItem (onPress), nous appelons clickFollow qui contient le nom, l'email et la company de l'occurence actuelle de users. clickFollow est une focntion que nous avons déclaré plus bas, dans notre mapDispatchToProps.
    var users = this.state.users.map((user, i) => {
      var bgColor = this.state.bgColor[i];
      return (
        <ListItem
          containerStyle={{backgroundColor: '#cee5ea'}}
          hideChevron
          key={i++}
          onPress={() => this.props.clickFollow(user.name, user.email, user.company.name)}
          avatar={<Avatar
            medium
            overlayContainerStyle={{backgroundColor: bgColor }}
            rounded
            title={user.name[0] + user.name.charAt(user.name.indexOf(" ") + 1)}
                  />}
          title={user.name}
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>{user.email}</Text>
              <Text style={styles.ratingText}>company: {user.company.name}</Text>
            </View>
          }
        />
      )
    });
    return (
      <ScrollView style={styles.container}>
        <List containerStyle={{marginBottom: 20}}>
          {users}
        </List>
      </ScrollView>
    );
    // Ici, nous affichons le contenu de notre variable list, dans laquelle nous avons pushé les données du state de users.
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  subtitleView: {
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingText: {
    color: 'grey'
  }
});

function mapDispatchToProps(dispatch) {
  return {
    clickFollow: function(name, email, company) {
      // Ici, on dispatch les informations que l'on souhaite traiter dans notre reducer.
      dispatch({ type: 'follow', name: name, email: email, company: company })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchScreen);
