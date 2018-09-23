// import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet
// } from "react-native";

// class FavoritPeraturan extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>FavoritPeraturan</Text>
//             </View>
//         );
//     }
// }
// export default FavoritPeraturan;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });

import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
    Icon,
    Platform,
    StatusBar
} from "react-native";
const { height, width } = Dimensions.get('window')

class FavoritPeraturan extends Component {
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 60
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    <ScrollView scrollEventThrottle={16}>

                      <View style={{ flex: 1, backgroundColor: 'white'}}>

                        <View style={{ borderBottomWidth: 5, borderColor: '#dddddd' }}>
                          <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}
                            onPress={()=>this.props.navigation.navigate('DetailPeraturan', {id: 'test Id Masuk'})}>
                            <View style={{width: '30%', paddingVertical: 2, }}>
                              <Image style={{width: '100%', height: 100 }}
                                source={require('../assets/ddtc-icon-5.jpg')}
                              />  
                            </View>
                            <View style={{width: '70%', justifyContent: 'center', paddingHorizontal: 10,}}>
                              <Text style={{marginTop: 10, fontSize: 10, color: 'grey', }}>
                                Rabu, 29 Agustus 2018 | 09:10 WIB
                              </Text>
                              <Text style={{ fontSize: 12, color: 'black', }}>
                                BERITA PAJAK HARI INI
                              </Text>
                              <Text style={{ fontWeight: 'bold',marginBottom: 5,}}>
                                Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}
                            onPress={()=>this.props.navigation.navigate('DetailPeraturan', {id: 'test Id Masuk'})}>
                            <View style={{width: '30%', paddingVertical: 2, }}>
                              <Image style={{width: '100%', height: 100 }}
                                source={require('../assets/ddtc-icon-5.jpg')}
                              />  
                            </View>
                            <View style={{width: '70%', justifyContent: 'center', paddingHorizontal: 10,}}>
                              <Text style={{marginTop: 10, fontSize: 10, color: 'grey', }}>
                                Rabu, 29 Agustus 2018 | 09:10 WIB
                              </Text>
                              <Text style={{ fontSize: 12, color: 'black', }}>
                                BERITA PAJAK HARI INI
                              </Text>
                              <Text style={{ fontWeight: 'bold',marginBottom: 5,}}>
                                Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}
                            onPress={()=>this.props.navigation.navigate('DetailPeraturan', {id: 'test Id Masuk'})}>
                            <View style={{width: '30%', paddingVertical: 2, }}>
                              <Image style={{width: '100%', height: 100 }}
                                source={require('../assets/ddtc-icon-5.jpg')}
                              />  
                            </View>
                            <View style={{width: '70%', justifyContent: 'center', paddingHorizontal: 10,}}>
                              <Text style={{marginTop: 10, fontSize: 10, color: 'grey', }}>
                                Rabu, 29 Agustus 2018 | 09:10 WIB
                              </Text>
                              <Text style={{ fontSize: 12, color: 'black', }}>
                                BERITA PAJAK HARI INI
                              </Text>
                              <Text style={{ fontWeight: 'bold',marginBottom: 5,}}>
                                Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}
                            onPress={()=>this.props.navigation.navigate('DetailPeraturan', {id: 'test Id Masuk'})}>
                            <View style={{width: '30%', paddingVertical: 2, }}>
                              <Image style={{width: '100%', height: 100 }}
                                source={require('../assets/ddtc-icon-5.jpg')}
                              />  
                            </View>
                            <View style={{width: '70%', justifyContent: 'center', paddingHorizontal: 10,}}>
                              <Text style={{marginTop: 10, fontSize: 10, color: 'grey', }}>
                                Rabu, 29 Agustus 2018 | 09:10 WIB
                              </Text>
                              <Text style={{ fontSize: 12, color: 'black', }}>
                                BERITA PAJAK HARI INI
                              </Text>
                              <Text style={{ fontWeight: 'bold',marginBottom: 5,}}>
                                Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}
                            onPress={()=>this.props.navigation.navigate('DetailPeraturan', {id: 'test Id Masuk'})}>
                            <View style={{width: '30%', paddingVertical: 2, }}>
                              <Image style={{width: '100%', height: 100 }}
                                source={require('../assets/ddtc-icon-5.jpg')}
                              />  
                            </View>
                            <View style={{width: '70%', justifyContent: 'center', paddingHorizontal: 10,}}>
                              <Text style={{marginTop: 10, fontSize: 10, color: 'grey', }}>
                                Rabu, 29 Agustus 2018 | 09:10 WIB
                              </Text>
                              <Text style={{ fontSize: 12, color: 'black', }}>
                                BERITA PAJAK HARI INI
                              </Text>
                              <Text style={{ fontWeight: 'bold',marginBottom: 5,}}>
                                Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                              </Text>
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
export default FavoritPeraturan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});