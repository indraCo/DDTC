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

class LoginPage extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', height: height}}>
                          <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20, justifyContent: 'center', alignItems: 'center',}}>
                            <Image source={require('../../../assets/ddtc-icon-6.jpg')}
                                style={{width: 180, height: 180, marginBottom: 20 }}
                            />
                            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '700', paddingHorizontal: 15, paddingVertical: 15, color: 'black' }}>
                              Silahkan Pilih Kategory Pencarian
                            </Text>
                            <Text style={{textAlign: 'center', fontSize: 14, fontWeight: '300', paddingHorizontal: 15, paddingVertical: 15, color: '#cacaca' }}>
                              Pilihlah salah satu dari 3 kategori pencarian sesuai dengan yang anda butuhkan.
                            </Text>
                          </View>
                          <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20, justifyContent: 'center', alignItems: 'center',}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchBerita', {id: 'Masuk EditAccount Cuy'})}
                              style={{backgroundColor: '#F77B04', borderRadius: 100, flexDirection: 'row', marginTop: 10}}>
                              <Text style={{width: '100%', textAlign: 'center', fontSize: 14, fontWeight: '400', paddingHorizontal: 15, paddingVertical: 15, color: 'white' }}>
                                  Cari Berita
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchBerita', {id: 'Masuk FavoritBerita Cuy'})}
                              style={{backgroundColor: '#F77B04', borderRadius: 100, flexDirection: 'row', marginTop: 10}}>
                              <Text style={{width: '100%', textAlign: 'center', fontSize: 14, fontWeight: '400', paddingHorizontal: 15, paddingVertical: 15, color: 'white' }}>
                                  Cari Peraturan
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchBerita', {id: 'Masuk FavoritPeraturan Cuy'})}
                              style={{backgroundColor: '#F77B04', borderRadius: 100, flexDirection: 'row', marginTop: 10}}>
                              <Text style={{width: '100%', textAlign: 'center', fontSize: 14, fontWeight: '400', paddingHorizontal: 15, paddingVertical: 15, color: 'white' }}>
                                  Cari Buku
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20, justifyContent: 'center', alignItems: 'center',}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchBerita', {id: 'Masuk EditAccount Cuy'})}
                              style={{backgroundColor: '#F77B04', borderRadius: 100, flexDirection: 'row', marginTop: 10}}>
                              <Text style={{width: '100%', textAlign: 'center', fontSize: 14, fontWeight: '400', paddingHorizontal: 15, paddingVertical: 15, color: 'white' }}>
                                  Cari Berita
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchBerita', {id: 'Masuk FavoritBerita Cuy'})}
                              style={{backgroundColor: '#F77B04', borderRadius: 100, flexDirection: 'row', marginTop: 10}}>
                              <Text style={{width: '100%', textAlign: 'center', fontSize: 14, fontWeight: '400', paddingHorizontal: 15, paddingVertical: 15, color: 'white' }}>
                                  Cari Peraturan
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchBerita', {id: 'Masuk FavoritPeraturan Cuy'})}
                              style={{backgroundColor: '#F77B04', borderRadius: 100, flexDirection: 'row', marginTop: 10}}>
                              <Text style={{width: '100%', textAlign: 'center', fontSize: 14, fontWeight: '400', paddingHorizontal: 15, paddingVertical: 15, color: 'white' }}>
                                  Cari Buku
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});