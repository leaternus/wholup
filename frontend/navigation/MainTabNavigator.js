import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import FollowingScreen from '../screens/FollowingScreen';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Account: {
      screen: AccountScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Following: {
      screen: FollowingScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Following':
            iconName = Platform.OS === 'ios' ? `ios-contacts${focused ? '' : '-outline'}` : 'md-contacts';
            break;
          case 'Search':
            iconName = Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search';
            break;
          case 'Account':
            iconName = Platform.OS === 'ios' ? `ios-settings${focused ? '' : '-outline'}` : 'md-settings';

        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
