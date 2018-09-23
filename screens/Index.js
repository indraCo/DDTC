import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Explore from './Explore'
import Library from './Library'
import BeritaTab from './Berita'
import Saved from './Saved'
import Profile from './Profile'
import PeraturanTab from './Peraturan'
// import Inbox from './Inbox'
// import Trips from './Trips'

let Tabs = createBottomTabNavigator({
  Home: {
    screen: Explore,
    navigationOptions: {
      header: 'DDTC',
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
        // <Icon name="ios-home-outline" color={tintColor} size={24} />
      )
    }
  },
  BeritaTab: {
    screen: BeritaTab,
    navigationOptions: {
      tabBarLabel: 'Berita',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-list-box" color={tintColor} size={24} />
        // <Icon name="ios-list-box-outline" color={tintColor} size={24} />
      )
    }
  },
  PeraturanTab: {
    screen: PeraturanTab,
    navigationOptions: {
      tabBarLabel: 'Peraturan',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="logo-buffer" color={tintColor} size={24} />
        // <Icon name="ios-list-box-outline" color={tintColor} size={24} />
      )
    }
  },
  LibraryTab: {
    screen: Library,
    navigationOptions: {
      tabBarLabel: 'Perpustakaan',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-document" color={tintColor} size={24} />
        // <Icon name="ios-heart-outline" color={tintColor} size={24} />
      )
    }
  },
  SavedTab: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-contact" color={tintColor} size={24} />
        // <Icon name="ios-heart-outline" color={tintColor} size={24} />
      )
    }
  },
  // Trips: {
  //   screen: Trips,
  //   navigationOptions: {
  //     tabBarLabel: 'TRIPS',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Image source={require('../assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
  //     )
  //   }
  // },
  // Inbox: {
  //   screen: Inbox,
  //   navigationOptions: {
  //     tabBarLabel: 'INBOX',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="ios-chatboxes-outline" color={tintColor} size={24} />
  //     )
  //   }
  // },
  // Profile: {
  //   screen: Inbox,
  //   navigationOptions: {
  //     tabBarLabel: 'PROFILE',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="ios-person-outline" color={tintColor} size={24} />
  //     )
  //   }
  // }
}, {
    initialRouteName: 'Home',
    // order: ['Explore', 'Berita'],
    tabBarOptions: {
      activeTintColor: '#F77B04',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#2B519A',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class LogoTitle extends React.Component {
  render() {
    const imgTest = '../assets/mlogo.png';
    return (
      <Image source={require('../assets/mlogo.png')}
       style={{ width: '90%', height: '100%', resizeMode: 'cover' }}/>
    );
  }
}



export default Tabs;

Tabs.navigationOptions = ({navigation}) => {
    const {index, routes} = navigation.state;
    const {routeName} = routes[index];

    return {
        headerTitle: (
          <LogoTitle />
        ),
        headerRight: (
          <TouchableOpacity style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginRight: 30}}
            onPress={()=>navigation.navigate('SearchMenu')}>
              <Icon name="ios-search" size={30} style={{color: 'white' }} />
          </TouchableOpacity>
        ),
        // headerTitle: (<Text>headerTitle</Text>),
          // <TouchableOpacity style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginRight: 30}}
          //   onPress={()=>this.props.navigation.navigate('DetailLibrary')}>
          //     <Icon name="ios-search" size={30} style={{color: 'white' }} />
          // </TouchableOpacity>
    };
};
