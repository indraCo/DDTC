import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Button
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

import Category from './components/Explore/Category'
import Home from './components/Explore/Home'

const { height, width } = Dimensions.get('window')

class Explore extends Component {

   static navigationOptions = {
      header: null
    }
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 60 + StatusBar.currentHeight
        }
    }

    render() {
        // <View style={{ height: this.startHeaderHeight, backgroundColor: '#2B519A', borderBottomWidth: 2, borderBottomColor: '#F77B04' }}>
        //     <View style={{flex: 1, flexDirection: 'row', height: this.startHeaderHeight - 22, marginTop: 20}}>
        //         <Image source={require('../assets/mlogo.png')}
        //            style={{ width: '80%', height: '100%', resizeMode: 'cover' }}/>
        //         <View style={{width: '20%', justifyContent: 'center', alignItems: 'center',}}>
        //             <Icon name="ios-search" size={30} style={{color: 'white' }} />
        //         </View>
        //     </View>                        
        // </View>
        return (

            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white'}}>

                            <View style={{ height: 430}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>

                                    <View style={{ height: 430, width: width, borderBottomWidth: 5, borderColor: '#dddddd' }} 
                                        onPress={()=>this.props.navigation.navigate('Login', {id: 123})}>
                                        <View style={{ flex: 2 }}>
                                            <Image source={require('../assets/ddtc-img-1.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <Text style={{marginTop: 21,fontStyle: 'italic', fontSize: 20, paddingHorizontal: 20, fontWeight: '400',}}>
                                            BERITA PAJAK HARI INI
                                        </Text>
                                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailBerita', {id: 'Masuk Detail Berita Cuy'})}>
                                          <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, paddingHorizontal: 20 }}>
                                              Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                          </Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 16, color: 'blue' }}>
                                            Kemampuan untuk mengakses informasi RTGS bisa sangat strategis bagi otoritas pajak dalam memetakan kepatuhan wajib pajak
                                        </Text>
                                        <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 11, color: 'grey' }}>
                                            3 jam yang lalu
                                        </Text>
                                    </View>
                                    <View style={{ height: 430, width: width, borderBottomWidth: 5, borderColor: '#dddddd' }} 
                                        onPress={()=>this.props.navigation.navigate('Login', {id: 123})}>
                                        <View style={{ flex: 2 }}>
                                            <Image source={require('../assets/ddtc-img-1.jpg')}
                                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                            />
                                        </View>
                                        <Text style={{marginTop: 21,fontStyle: 'italic', fontSize: 20, paddingHorizontal: 20, fontWeight: '400',}}>
                                            BERITA PAJAK HARI INI
                                        </Text>
                                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailBerita', {id: 'Masuk Detail Berita Cuy'})}>
                                          <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, paddingHorizontal: 20 }}>
                                              Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                          </Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 16, color: 'blue' }}>
                                            Kemampuan untuk mengakses informasi RTGS bisa sangat strategis bagi otoritas pajak dalam memetakan kepatuhan wajib pajak
                                        </Text>
                                        <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 11, color: 'grey' }}>
                                            3 jam yang lalu
                                        </Text>
                                    </View>
                                </ScrollView>
                            </View>

                            <View style={{ borderBottomWidth: 5, borderColor: '#dddddd' }}>
                              <Text style={{marginTop: 20,fontStyle: 'italic', fontSize: 20, paddingHorizontal: 20, fontWeight: '400',}}>
                                  PERATURAN TERBARU
                              </Text>
                              <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}
                                onPress={()=>this.props.navigation.navigate('DetailPeraturan', {id: 'Masuk Detail Peraturan Cuy'})}>
                                <View style={{width: '30%', paddingVertical: 2, }}>
                                  <Image style={{width: '100%', height: 100 }}
                                    source={require('../assets/ddtc-icon-5.jpg')}
                                  />  
                                </View>
                                <View style={{width: '70%', justifyContent: 'center', paddingHorizontal: 10,}}>
                                  <Text style={{marginTop: 10, fontWeight: 'bold',}}>
                                    Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                  </Text>
                                  <Text style={{ fontSize: 10, color: 'green', marginBottom: 5,}}>
                                    Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                  </Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}
                                onPress={()=>this.props.navigation.navigate('DetailPeraturan', {id: 'Masuk Detail Peraturan Cuy'})}>
                                <View style={{width: '30%', paddingVertical: 2, }}>
                                  <Image style={{width: '100%', height: 100 }}
                                    source={require('../assets/ddtc-icon-5.jpg')}
                                  />  
                                </View>
                                <View style={{width: '70%', justifyContent: 'center', paddingHorizontal: 10,}}>
                                  <Text style={{marginTop: 10, fontWeight: 'bold',}}>
                                    Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                  </Text>
                                  <Text style={{ fontSize: 10, color: 'green', marginBottom: 5,}}>
                                    Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                  </Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}
                                onPress={()=>this.props.navigation.navigate('DetailPeraturan', {id: 'Masuk Detail Peraturan Cuy'})}>
                                <View style={{width: '30%', paddingVertical: 2, }}>
                                  <Image style={{width: '100%', height: 100 }}
                                    source={require('../assets/ddtc-icon-5.jpg')}
                                  />  
                                </View>
                                <View style={{width: '70%', justifyContent: 'center', paddingHorizontal: 10,}}>
                                  <Text style={{marginTop: 10, fontWeight: 'bold',}}>
                                    Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                  </Text>
                                  <Text style={{ fontSize: 10, color: 'green', marginBottom: 5,}}>
                                    Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                  </Text>
                                </View>
                              </TouchableOpacity>                                                        
                            </View>

                            <View style={{  paddingVertical: 20, height: 330}}>
                                <Text style={{marginBottom: 20, fontStyle: 'italic', fontSize: 20, paddingHorizontal: 20, fontWeight: '400',}}>
                                    KOLEKSI LIBRARY TERBARU
                                </Text>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>

                                    <TouchableOpacity style={{ height: 250, width: width - 20, paddingHorizontal: 20}} 
                                        onPress={()=>this.props.navigation.navigate('DetailLibrary', {id: 123})}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, height: 200, borderBottomWidth: 1, borderBottomColor: 'blue' }}>
                                            <Image source={require('../assets/ddtc-icon-2.jpg')}
                                                style={{flex: 1,width: 120, height: 180 }}
                                            />
                                        </View>
                                        <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, textAlign: 'center', color: 'blue' }}>
                                            Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ height: 250, width: width - 20, paddingHorizontal: 20}} 
                                        onPress={()=>this.props.navigation.navigate('DetailLibrary', {id: 123})}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, height: 200, borderBottomWidth: 1, borderBottomColor: 'blue' }}>
                                            <Image source={require('../assets/ddtc-icon-2.jpg')}
                                                style={{flex: 1,width: 120, height: 180 }}
                                            />
                                        </View>
                                        <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, textAlign: 'center', color: 'blue' }}>
                                            Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                        </Text>
                                    </TouchableOpacity>

                                </ScrollView>
                            </View>
                        </View>
                        
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});