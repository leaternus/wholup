import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';

import { Text } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (

      <ImageBackground style={{flex: 1}} source={require("../assets/images/network.jpg")}>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>
          <Text h1 style={{color: "#FFFFFF"}}>Whol'Up</Text>
          <Text h3 style={{color: "#FFFFFF"}}>Start your networking</Text>
          <Text h3 style={{color: "#FFFFFF"}}>now and everywhere</Text>
        </View>
      </ImageBackground>


    );
  }

}
