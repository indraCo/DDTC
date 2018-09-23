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

class DetailBerita extends Component {
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


    render() {
      // <View style={{ height: this.startHeaderHeight, backgroundColor: '#2B519A', borderBottomWidth: 2, borderBottomColor: '#F77B04' }}>
      //       <View style={{flex: 1, flexDirection: 'row', height: this.startHeaderHeight - 22, marginTop: 20}}>
      //           <View style={{width: '20%', justifyContent: 'center', alignItems: 'center',}}>
      //               <Icon name="md-arrow-back" size={30} style={{color: 'white' }} onPress={()=>this.props.navigation.navigate('Home')}/>
      //           </View>
      //           <Image source={require('../assets/mlogo.png')}
      //              style={{ width: '80%', height: '100%', resizeMode: 'cover' }}/>
      //       </View>                        
      //   </View>
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    
                    <ScrollView scrollEventThrottle={16}>
                        
                      <View style={{ flex: 1, backgroundColor: 'white'}}>
                        <View style={{ width: width, borderBottomWidth: 5, borderColor: '#dddddd' }} 
                            onPress={()=>this.props.navigation.navigate('Login', {id: 123})}>
                            <View style={{ height: 300}}>
                                <Image source={require('../assets/ddtc-img-1.jpg')}
                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                />
                                <TouchableOpacity  
                                  style={{zIndex: 1, position: 'absolute', bottom: -20, right: 20, borderRadius: 50, backgroundColor: '#F77B04', width: 50, height: 50, justifyContent: 'center', alignItems: 'center',}}
                                  onPress={this._shareToWhatsApp} >
                                    <Icon name="md-share" size={26} style={{color: 'white',}} />
                                </TouchableOpacity >
                                <TouchableOpacity 
                                  style={{zIndex: 1, position: 'absolute', bottom: -20, right: 80, borderRadius: 50, backgroundColor: '#F77B04', width: 50, height: 50, justifyContent: 'center', alignItems: 'center',}}
                                  onPress={this._onLoveButton} >
                                  <Icon name="ios-heart" size={26} style={{color: 'white',}} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{marginTop: 21, fontSize: 20, paddingHorizontal: 20, fontWeight: '400', backgroundColor: 'grey'}}>
                                UPPERDECK
                            </Text>
                            <Text style={{ fontSize: 24, fontWeight: '900', marginTop: 20, paddingHorizontal: 20 }}>
                                BKF: Objek PPh Impor Bakal Diperluas
                            </Text>
                            <Text style={{marginTop: 0, fontSize: 10, color: 'grey', paddingHorizontal: 20 }}>
                              Awwaliatul Mukarromah &#124; Rabu, 29 Agustus 2018 &#124; 09:10 WIB
                            </Text>
                            <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 16, color: 'black' }}>
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
export default DetailBerita;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});