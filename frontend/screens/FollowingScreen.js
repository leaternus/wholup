import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { List, ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

class FollowingScreen extends React.Component {

  constructor(props) {
    super(props);
    // Ici, on définit notre liste de states. En l'occurence, un tableau users vide.
    this.state = {
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
    title: 'following',
    header: null
  };
  // Ici, nous bouclons sur notre state de followings, transformé plus en bas en props via mapStateToProps. Pour l'afficher sur notre vue.
  render() {
    var followings = this.props.followings.map((following, i) => {
      var bgColor = this.state.bgColor[i];
      return(
        <ListItem
          containerStyle={{backgroundColor: '#cee5ea'}}
          hideChevron
          key={i}
          avatar={<Avatar
          medium
            overlayContainerStyle={{backgroundColor: bgColor }}
            rounded
            title={following.name[0] + following.name.charAt(following.name.indexOf(" ") + 1)}
                  />}
          title={following.name}
          subtitle={
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>{following.email}</Text>
              <Text style={styles.ratingText}>company: {following.company}</Text>
            </View>
          }
        />
      )
    })
    return (
      <ScrollView style={styles.container}>
        <List containerStyle={{marginBottom: 20}}>
          {followings}
        </List>
      </ScrollView>
    );
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

function mapStateToProps(state) {
  console.log(state);
  // Ici, on rend notre state.followings accessible à notre vue depuis props.followings
  return { followings: state.followings }
}

export default connect(
  mapStateToProps,
  null
)(FollowingScreen);
