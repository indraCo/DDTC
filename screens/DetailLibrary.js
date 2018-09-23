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

class DetailLibrary extends Component {
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
                    //     <View style={{flex: 1, flexDirection: 'row', height: this.startHeaderHeight - 22, marginTop: 20}}>
                    //         <View style={{width: '10%', justifyContent: 'center', alignItems: 'center',}}>
                    //             <Icon name="md-arrow-back" size={30} style={{color: 'white' }} 
                    //             onPress={()=>this.props.navigation.navigate('Home')}/>
                    //         </View>
                    //         <Image source={require('../assets/mlogo.png')}
                    //            style={{ width: '90%', height: '100%', resizeMode: 'cover' }}/>
                    //     </View>                        
                    // </View>
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView scrollEventThrottle={16}>
                        
                      <View style={{ flex: 1, backgroundColor: 'white'}}>
                        <View style={{ width: width, borderBottomWidth: 5, borderColor: '#dddddd' }} 
                            onPress={()=>this.props.navigation.navigate('Login', {id: 123})}>
                            <View style={{ height: 250, justifyContent: 'center', alignItems: 'center', }}>
                              <Image source={require('../assets/ddtc-icon-2.jpg')}
                                  style={{ width: 120, height: 180 }}
                              />
                            </View>
                            <Text style={{ fontSize: 24, fontWeight: '900', marginTop: 20, paddingHorizontal: 20 }}>
                                Tolley's Yellow Tax Handbook 2015-16 Part 2b
                            </Text>
                            <Text style={{marginTop: 0, fontSize: 12, color: 'grey', paddingHorizontal: 20 }}>
                              <Text style={{ color: '#337ab7'}}>Anne Redston</Text> - Personal Name
                            </Text>
                            <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 14, color: '#333', fontStyle: 'italic' }}>
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
export default DetailLibrary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});