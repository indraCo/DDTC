import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

import {createMaterialTopTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import BeritaSatu from './components/Berita/BeritaSatu'

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

const BeritaTab = createMaterialTopTabNavigator({
		Berita: {screen: BeritaSatu,
			navigationOptions:{
				tabBarLabel:'Berita',
			}
		},
		Review: {screen: BeritaSatu,
			navigationOptions:{
				tabBarLabel:'Review',
			}
		},
		Fokus: {screen: BeritaSatu,
			navigationOptions:{
				tabBarLabel:'Fokus',
			}
		},
		Literasi: {screen: BeritaSatu,
			navigationOptions:{
				tabBarLabel:'Literasi',
			}
		},
		Data: {screen: BeritaSatu,
			navigationOptions:{
				tabBarLabel:'Data & Alat',
			}
		},
		Komunitas: {screen: BeritaSatu,
			navigationOptions:{
				tabBarLabel:'Komunitas',
			}
		},
		PeraturanBerita: {screen: BeritaSatu,
			navigationOptions:{
				tabBarLabel:'Peraturan',
			}
		},
		Reportase: {screen: BeritaSatu,
			navigationOptions:{
				tabBarLabel:'Reportase',
			}
		},
	},
	{
		initialRouteName: 'Berita',
		// headerTitle: 'DDTC',
		// headerRight: 'search',
		// order: [ 'Home', 'Review', 'Fokus', 'Literasi', 'Data', 'Komunitas', 'Peraturan', 'Reportase' ],
		// shifting: true,
		// tabBarPosition: 'top',
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
				// borderTopWidth: .5,
				borderTopColor: 'grey',
				// height: 50,
				marginTop: -25,
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

export default BeritaTab;