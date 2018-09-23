// import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet
// } from "react-native";

// class DetailPeraturan extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>DetailPeraturan</Text>
//             </View>
//         );
//     }
// }
// export default DetailPeraturan;

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
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Linking,
    Alert
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

class DetailPeraturan extends Component {
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 60 + StatusBar.currentHeight
        }
    }    

    _shareToWhatsApp(text) {
      Linking.openURL(`whatsapp://send?text=${text}`);
    } 

    _onLoveButton() {
      Alert.alert('Saved Already!')
    }


                    // <View style={{ height: this.startHeaderHeight, backgroundColor: '#2B519A', borderBottomWidth: 2, borderBottomColor: '#F77B04' }}>
                    //     <View style={{flex: 1, flexDirection: 'row', height: this.startHeaderHeight - 22, marginTop: 20}}>
                    //         <View style={{width: '10%', justifyContent: 'center', alignItems: 'center',}}>
                    //             <Icon name="md-arrow-back" size={30} style={{color: 'white' }} onPress={()=>this.props.navigation.navigate('Home')}/>
                    //         </View>
                    //         <Image source={require('../assets/mlogo.png')}
                    //            style={{ width: '90%', height: '100%', resizeMode: 'cover' }}/>
                    //     </View>                        
                    // </View>
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView scrollEventThrottle={16}>
                        
                      <View style={{ flex: 1, backgroundColor: 'white'}}>
                        <View style={{ width: width, borderBottomWidth: 5, borderColor: '#dddddd' }} 
                            onPress={()=>this.props.navigation.navigate('Login', {id: 123})}>
                            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10}}>
                                <TouchableOpacity  
                                  style={{ borderRadius: 50, backgroundColor: '#F77B04', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                                    <Icon name="md-time" size={26} style={{color: 'white',}} />
                                </TouchableOpacity >
                                <TouchableOpacity  
                                  style={{ borderRadius: 50, backgroundColor: '#F77B04', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                                    <Icon name="ios-link" size={26} style={{color: 'white',}} />
                                </TouchableOpacity >
                                <TouchableOpacity  
                                  style={{ borderRadius: 50, backgroundColor: '#F77B04', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginRight: 10}}>
                                    <Icon name="md-attach" size={26} style={{color: 'white',}} />
                                </TouchableOpacity >
                                <TouchableOpacity  
                                  style={{ borderRadius: 50, backgroundColor: '#F77B04', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginRight: 10}}
                                  onPress={this._shareToWhatsApp} >
                                    <Icon name="md-share" size={26} style={{color: 'white',}} />
                                </TouchableOpacity >
                                <TouchableOpacity 
                                  style={{ borderRadius: 50, backgroundColor: '#F77B04', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginRight: 10}}
                                  onPress={this._onLoveButton} >
                                  <Icon name="ios-heart" size={26} style={{color: 'white',}} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 24, fontWeight: '900', paddingHorizontal: 20 }}>
                                PERATURAN MENTERI KEUANGAN REPUBLIK INDONESIA NOMOR 110/PMK.010/2018
                            </Text> 
                            <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 16, color: '#737373' }}>
                                JAKARTA, DDTCNews - Pagi ini, Rabu &#40; 29&#47; 8 &#41;,
                                kabar datang pemerintah yang
                                berencana merevisi aturan pajak
                                penghasilan &#40; PPh &#41; impor. Tak hanya
                                menaikkan tarif, pemerintah juga akan
                                menambah produk-produk yang bakal
                                terkena PPh impor.

                                Saat ini, aturan PPh impor yang tertuang
                                dalam Peraturan Menteri Keuangan &#40; PMK &#41;
                                No.34&#47; 2017, menyasar 889 produk.
                                Sebanyak 244 produk terkena tarif PPh
                                impor 10%, lalu 568 produk dikenakan 7,5 &#37;,
                                dam tarif 0,5 &#37; untuk tujuh komoditas.

                                Kabar lainnya mengenai DPR yang
                                kembali melaksanakan sidang paripurna
                                kedua membahas Rancangan Anggaran
                                Pendapatan dan Belanja Negara &#40; RAPBN &#41;
                                2019 dengan agenda pembacaan
                                pandangan fraksi-fraksi. Kesepuluh fraksi
                                sepakat melanjutkan pembahasan,
                                namun ada tiga indikator target
                                perekonomian yang jadi sorotan
                            </Text>
                        </View>
                        
                      </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default DetailPeraturan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});