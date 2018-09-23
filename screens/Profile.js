import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white'}}>
                          <View style={{ height: 250, width: width, borderBottomWidth: 5, borderColor: '#dddddd', justifyContent: 'center', alignItems: 'center',  }} 
                              onPress={()=>this.props.navigation.navigate('Login', {id: 123})}>
                              <TouchableOpacity style={{ width: 150, height: 150, borderRadius: 100, backgroundColor: '#F77B04', justifyContent: 'center', alignItems: 'center',}}>
                                  <Image source={require('../assets/ddtc-icon-4.jpg')}
                                      style={{width: '60%', height: '43%' }}
                                  />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailBerita', {id: 'Masuk Detail Berita Cuy'})}>
                                <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, paddingHorizontal: 20, color: '#F77B04' }}>
                                    Indra Tamfaaannn
                                </Text>
                              </TouchableOpacity>
                          </View> 
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'white'}}>
                          <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20,}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('AccountTab', {id: 'Masuk AccountTab Cuy'})}
                              style={{backgroundColor: '#F77B04', borderRadius: 5, flexDirection: 'row', marginTop: 10}}>
                              <Text style={{width: '90%', fontSize: 18, fontWeight: '400', paddingHorizontal: 15, paddingVertical: 15, color: 'white' }}>
                                  Edit Account
                              </Text>
                              <View style={{width: '10%'}}>
                                <Icon name="ios-create" size={26} style={{color: 'white', paddingHorizontal: 5, paddingVertical: 15,}} />
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('FavoritBerita', {id: 'Masuk FavoritBerita Cuy'})}
                              style={{backgroundColor: '#F77B04', borderRadius: 5, flexDirection: 'row', marginTop: 10}}>
                              <Text style={{width: '90%', fontSize: 18, fontWeight: '400', paddingHorizontal: 15, paddingVertical: 15, color: 'white' }}>
                                  Berita Favorite
                              </Text>
                              <View style={{width: '10%'}}>
                                <Icon name="ios-create" size={26} style={{color: 'white', paddingHorizontal: 5, paddingVertical: 15,}} />
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('FavoritPeraturan', {id: 'Masuk FavoritPeraturan Cuy'})}
                              style={{backgroundColor: '#F77B04', borderRadius: 5, flexDirection: 'row', marginTop: 10}}>
                              <Text style={{width: '90%', fontSize: 18, fontWeight: '400', paddingHorizontal: 15, paddingVertical: 15, color: 'white' }}>
                                  Peraturan Favorite
                              </Text>
                              <View style={{width: '10%'}}>
                                <Icon name="ios-create" size={26} style={{color: 'white', paddingHorizontal: 5, paddingVertical: 15,}} />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                        
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});