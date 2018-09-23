import React from 'react';
import { Button, Image, Platform, View, Text, TouchableOpacity, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import createBottomTabNavigator from './screens/Index'

import DetailBerita from './screens/DetailBerita'
import DetailPeraturan from './screens/DetailPeraturan'
import DetailLibrary from './screens/DetailLibrary'

import Library from './screens/Library'

import FavoritPeraturan from './screens/FavoritPeraturan'
import FavoritBerita from './screens/FavoritBerita'
import EditAccount from './screens/EditAccount'

import SearchMenu from './screens/SearchMenu'
import SearchModal from './screens/SearchModal'
import SearchBerita from './screens/SearchBerita'
// import Login from './screens/Login'

import AccountTab from './screens/AccountTab'

class LogoTitle extends React.Component {
  render() {
    const imgTest = './assets/mlogo.png';
    return (
      <Image source={require('./assets/mlogo.png')}
       style={{ width: '90%', height: '100%', resizeMode: 'cover' }}/>
    );
  }
}

class LogoTitleTwo extends React.Component {
  render() {
    // const { navigate } = this.props.navigation;
    const imgTest = './assets/mlogo.png';
    return (
      <View style={{
        flexDirection: 'row',
        height: 70,
        marginTop: 20,
        backgroundColor: '#2B519A',
        borderBottomWidth: 2, 
        borderBottomColor: '#F77B04' 
      }}>
        <Image source={require('./assets/mlogo.png')}
         style={{ width: '90%', height: '100%', resizeMode: 'cover' }}/>
        <TouchableOpacity style={{width: '10%', justifyContent: 'center', alignItems: 'center', marginRight: 30}}
          onPress={() => navigate('DetailLibrary')}>
            <Icon name="ios-search" size={30} style={{color: 'white' }} />
        </TouchableOpacity>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: {
           screen:createBottomTabNavigator, 
        //    navigationOptions: {
        //         header: null
        // }
    },
    DetailBerita: {
           screen:DetailBerita, 
        //    navigationOptions: {
        //         header: null
        // }
    },
    DetailPeraturan: {
           screen: DetailPeraturan, 
        //    navigationOptions: {
        //         header: null
        // }
    },
    DetailLibrary: {
           screen: DetailLibrary, 
        //    navigationOptions: {
        //         header: null
        // }
    },
    Library: {
           screen: Library, 
           navigationOptions: {
                header: null
        }
    },
    FavoritPeraturan: {
           screen: FavoritPeraturan, 
        //    navigationOptions: {
        //         header: null
        // }
    },
    FavoritBerita: {
           screen: FavoritBerita, 
        //    navigationOptions: {
        //         header: null
        // }
    },
    EditAccount: {
           screen: EditAccount, 
           navigationOptions: {
                header: null
        }
    },
    SearchModal: {
           screen: SearchModal, 
           navigationOptions: {
                header: null
        }
    },
    SearchMenu: {
           screen: SearchMenu, 
        //    navigationOptions: {
        //         header: null
        // }
    },
    SearchBerita: {
           screen: SearchBerita, 
           navigationOptions: {
                header: null
        }
    },
    AccountTab: {
           screen: AccountTab, 
           navigationOptions: {
                header: null
        }
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerRight: (
          ({navigate}) => <SearchModal navigate={navigate}/>
      ),
      headerStyle: {
        backgroundColor: '#2B519A',
        borderBottomWidth: 2, 
        borderBottomColor: '#F77B04' 
      },
      headerTintColor: '#fff',
      // title: 'DDTC Logo',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    },
  }
);
          // <SearchModal/>
        // <TouchableOpacity style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginRight: 30}}
        //   onPress={()=>this.props.navigation.navigate('DetailLibrary')}>
        //     <Icon name="ios-search" size={30} style={{color: 'white' }} />
        // </TouchableOpacity>

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

// createBottomTabNavigator.navigationOptions = {
//   header: ( /* Your custom header */
//     <LogoTitleTwo />
//   )
// };
