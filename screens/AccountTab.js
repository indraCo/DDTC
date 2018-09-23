import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

import {createMaterialTopTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginPage from './components/Login/LoginPage';

class Login extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.textNav}>
					Login Screen 
				</Text>
			</View>
		)
	}
}
class SignUp extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.textNav}>
					SignUp Screen
				</Text>
			</View>
		)
	}
}

const AccountTab = createMaterialTopTabNavigator({
		Login: {screen: LoginPage,
			navigationOptions:{
				tabBarLabel:'Login',
			}
		},
		SignUp: {screen: SignUp,
			navigationOptions:{
				tabBarLabel:'SignUp',
			}
		},
	},
	{
		initialRouteName: 'Login',
		swipeEnebled: true,
		animationEnebled: false,
		tabBarStyle: {
        backgroundColor: '#eeeeee',
		},
		tabBarOptions: {
			scrollEnabled: true,
			activeTintColor: '#142e53',
			inactiveTintColor: 'gray',
	    labelStyle: {
	      fontSize: 12,
	    },
	    tabStyle: {
	      width: Dimensions.get('window').width / 2,
	    },
			style:{
				backgroundColor: '#fff',
				// borderTopWidth: .5,
				borderTopColor: 'grey',
				// height: 50,
				marginTop: -25,
			},
			indicatorStyle: {
				height: 2,
	    	backgroundColor:'#F77B04'
			},
			showIcon: true
		}
	}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textNav: {
    fontSize: 11
  },
});

export default AccountTab;