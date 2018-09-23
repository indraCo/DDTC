import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

import {createMaterialTopTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import PeraturanSatu from './components/Peraturan/PeraturanSatu'

class ProfileScreen extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.textNav}>
					Profile Screen 
				</Text>
			</View>
		)
	}
}
class FeedScreen extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.textNav}>
					Feed Screen
				</Text>
			</View>
		)
	}
}

const PeraturanTab = createMaterialTopTabNavigator({
		PeraturanPajak: {screen: PeraturanSatu,
			navigationOptions:{
				// headerTitle:'PeraturanPajak',
				tabBarLabel:'Peraturan Pajak',
				// tabBarIcon: ({tintColor}) => (
				// 	<Icon name="ios-PeraturanPajak" color={tintColor} size={24} />
				// )
			}
		},
		P3B: {screen: PeraturanSatu,
			navigationOptions:{
				tabBarLabel:'P3B',
			}
		},
		PutusanPengadilanPajak: {screen: PeraturanSatu,
			navigationOptions:{
				tabBarLabel:'Putusan Pengadilan Pajak',
			}
		},
		PutusanMA: {screen: PeraturanSatu,
			navigationOptions:{
				tabBarLabel:'Putusan MA',
			}
		},
	},
	{
		initialRouteName: 'PeraturanPajak',
		headerTitle: 'DDTC',
		// headerRight: 'search',
		// order: [ 'Home', 'P3B', 'PutusanPengadilanPajak', 'PutusanMA', 'Data', 'Komunitas', 'Peraturan', 'Reportase' ],
		// shifting: true,
		tabBarPosition: 'top',
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
	      fontSize: 10,
	    },
	    tabStyle: {
	      width: Dimensions.get('window').width / 4,
	    },
			style:{
				backgroundColor: '#fff',
				borderTopWidth: .5,
				borderTopColor: 'grey',
				marginTop: -25, 
				// fontSize: 8
				// marginTop: 100,
			},
			indicatorStyle: {
				height: 1.5,
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

PeraturanTab.navigationOptions = {
  header: 'taiiii',
	headerTitle:'Home',
};

export default PeraturanTab;