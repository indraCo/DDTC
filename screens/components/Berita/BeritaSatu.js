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

class BeritaSatu extends Component {
    static navigationOptions = {
      title: 'Berita',
    };

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 60
        }
    }
    render() {
      // <View style={{ height: this.startHeaderHeight, backgroundColor: '#2B519A', borderBottomWidth: 2, borderBottomColor: '#F77B04' }}>
      //     <View style={{flex: 1, flexDirection: 'row', height: this.startHeaderHeight}}>
      //       <View style={{justifyContent: 'center', alignItems: 'center', width: '80%'}}>
      //         <Image source={require('../../../assets/mlogo.png')}
      //            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}/>
      //       </View>                        
      //       <View style={{justifyContent: 'center', alignItems: 'center', width: '20%'}}>
      //         <Image source={require('../../../assets/ddtc-icon-3.jpg')}
      //            style={{ width: '50%', height: '50%', resizeMode: 'cover' }}/>                        
      //       </View>                        
      //     </View>                        
      // </View>
        return (
            <SafeAreaView style={{ flex: 1 }}>
                
                <View style={{ flex: 1 }}>

                    <ScrollView scrollEventThrottle={16}>

                      <View style={{ flex: 1, backgroundColor: 'white'}}>
                        <View style={{flex: 1, flexDirection: 'row', borderBottomWidth: 5, borderColor: '#dddddd'}}>
                          <View style={{width: width / 3, paddingHorizontal: 10, paddingVertical: 10,}}>
                            <TouchableOpacity style={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderColor: '#eee', borderRadius: 15, borderWidth: 1, paddingHorizontal: 5, paddingVertical: 5,}}
                              onPress={()=>this.props.navigation.navigate('SearchBerita', {id: 'test Id Masuk'})}>
                              <Image style={{width: 50, height: 50 }}
                                source={require('../../../assets/ddtc-icon-5.jpg')}
                              />
                              <View style={{flex: 1, justifyContent: 'center'}}>
                                <Text style={{ fontSize: 10, color: 'green', marginBottom: 5, textAlign: 'center',}}>
                                  Sub Kanal Berita
                                </Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View style={{width: width / 3, paddingHorizontal: 10, paddingVertical: 10,}}>
                            <TouchableOpacity style={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderColor: '#eee', borderRadius: 15, borderWidth: 1, paddingHorizontal: 5, paddingVertical: 5,}}
                              onPress={()=>this.props.navigation.navigate('SearchBerita', {id: 'test Id Masuk'})}>
                              <Image style={{width: 50, height: 50 }}
                                source={require('../../../assets/ddtc-icon-5.jpg')}
                              />
                              <View style={{flex: 1, justifyContent: 'center'}}>
                                <Text style={{ fontSize: 10, color: 'green', marginBottom: 5, textAlign: 'center',}}>
                                  Sub Kanal Berita
                                </Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View style={{width: width / 3, paddingHorizontal: 10, paddingVertical: 10,}}>
                            <TouchableOpacity style={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderColor: '#eee', borderRadius: 15, borderWidth: 1, paddingHorizontal: 5, paddingVertical: 5,}}
                              onPress={()=>this.props.navigation.navigate('SearchBerita', {id: 'test Id Masuk'})}>
                              <Image style={{width: 50, height: 50 }}
                                source={require('../../../assets/ddtc-icon-5.jpg')}
                              />
                              <View style={{flex: 1, justifyContent: 'center'}}>
                                <Text style={{ fontSize: 10, color: 'green', marginBottom: 5, textAlign: 'center',}}>
                                  Sub Kanal Berita
                                </Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                          
                        </View>
                      </View>

                      <View style={{ flex: 1, backgroundColor: 'white'}}>
                        <View style={{ height: 430, width: width, borderBottomWidth: 5, borderColor: '#dddddd' }} 
                            onPress={()=>this.props.navigation.navigate('Login', {id: 123})}>
                            <View style={{ flex: 2 }}>
                                <Image source={require('../../../assets/ddtc-img-1.jpg')}
                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                />
                            </View>
                            <Text style={{fontStyle: 'italic', marginTop: 21, fontSize: 20, paddingHorizontal: 20, fontWeight: '400',}}>
                                UPPERDECK
                            </Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailBerita', {id: 'Masuk Detail Berita Cuy'})}>
                              <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, paddingHorizontal: 20 }}>
                                  Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                              </Text>
                            </TouchableOpacity>
                            <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 16, color: 'blue' }}>
                                Kemampuan untuk mengakses informasi RTGS bisa sangat strategis bagi otoritas pajak dalam memetakan kepatuhan wajib pajak
                            </Text>
                        </View>
                        <View style={{ height: 430, width: width, borderBottomWidth: 5, borderColor: '#dddddd' }} 
                            onPress={()=>this.props.navigation.navigate('Login', {id: 123})}>
                            <View style={{ flex: 2 }}>
                                <Image source={require('../../../assets/ddtc-img-1.jpg')}
                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                />
                            </View>
                            <Text style={{fontStyle: 'italic', marginTop: 21, fontSize: 20, paddingHorizontal: 20, fontWeight: '400',}}>
                                UPPERDECK
                            </Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailBerita', {id: 'Masuk Detail Berita Cuy'})}>
                              <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, paddingHorizontal: 20 }}>
                                  Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                              </Text>
                            </TouchableOpacity>
                            <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 16, color: 'blue' }}>
                                Kemampuan untuk mengakses informasi RTGS bisa sangat strategis bagi otoritas pajak dalam memetakan kepatuhan wajib pajak
                            </Text>
                        </View>
                        <View style={{ height: 430, width: width, borderBottomWidth: 5, borderColor: '#dddddd' }} 
                            onPress={()=>this.props.navigation.navigate('Login', {id: 123})}>
                            <View style={{ flex: 2 }}>
                                <Image source={require('../../../assets/ddtc-img-1.jpg')}
                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                />
                            </View>
                            <Text style={{fontStyle: 'italic', marginTop: 21, fontSize: 20, paddingHorizontal: 20, fontWeight: '400',}}>
                                UPPERDECK
                            </Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailBerita', {id: 'Masuk Detail Berita Cuy'})}>
                              <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, paddingHorizontal: 20 }}>
                                  Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                              </Text>
                            </TouchableOpacity>
                            <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 16, color: 'blue' }}>
                                Kemampuan untuk mengakses informasi RTGS bisa sangat strategis bagi otoritas pajak dalam memetakan kepatuhan wajib pajak
                            </Text>
                        </View>

                        <View style={{ borderBottomWidth: 5, borderColor: '#dddddd' }}>
                          <Text style={{marginTop: 20, fontSize: 20, paddingHorizontal: 20, fontWeight: '400'}}>
                              TERPOPULER
                          </Text>
                          <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}>
                            <View style={{width: '30%', paddingVertical: 2, }}>
                              <Image style={{width: '100%', height: 100 }}
                                source={require('../../../assets/ddtc-icon-5.jpg')}
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
                          <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}>
                            <View style={{width: '30%', paddingVertical: 2, }}>
                              <Image style={{width: '100%', height: 100 }}
                                source={require('../../../assets/ddtc-icon-5.jpg')}
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
                          <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}>
                            <View style={{width: '30%', paddingVertical: 2, }}>
                              <Image style={{width: '100%', height: 100 }}
                                source={require('../../../assets/ddtc-icon-5.jpg')}
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


                        <View style={{ height: 430, width: width, borderBottomWidth: 5, borderColor: '#dddddd' }} 
                            onPress={()=>this.props.navigation.navigate('Login', {id: 123})}>
                            <View style={{ flex: 2 }}>
                                <Image source={require('../../../assets/ddtc-img-1.jpg')}
                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                />
                            </View>
                            <Text style={{fontStyle: 'italic', marginTop: 21, fontSize: 20, paddingHorizontal: 20, fontWeight: '400',}}>
                                UPPERDECK
                            </Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailBerita', {id: 'Masuk Detail Berita Cuy'})}>
                              <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, paddingHorizontal: 20 }}>
                                  Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                              </Text>
                            </TouchableOpacity>
                            <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 16, color: 'blue' }}>
                                Kemampuan untuk mengakses informasi RTGS bisa sangat strategis bagi otoritas pajak dalam memetakan kepatuhan wajib pajak
                            </Text>
                        </View>
                        <View style={{ height: 430, width: width, borderBottomWidth: 5, borderColor: '#dddddd' }} 
                            onPress={()=>this.props.navigation.navigate('Login', {id: 123})}>
                            <View style={{ flex: 2 }}>
                                <Image source={require('../../../assets/ddtc-img-1.jpg')}
                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                                />
                            </View>
                            <Text style={{fontStyle: 'italic', marginTop: 21, fontSize: 20, paddingHorizontal: 20, fontWeight: '400',}}>
                                UPPERDECK
                            </Text>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailBerita', {id: 'Masuk Detail Berita Cuy'})}>
                              <Text style={{ fontSize: 20, fontWeight: '400', marginTop: 20, paddingHorizontal: 20 }}>
                                  Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                              </Text>
                            </TouchableOpacity>
                            <Text style={{ fontWeight: '100', marginTop: 10,marginBottom: 10, paddingHorizontal: 20, fontSize: 16, color: 'blue' }}>
                                Kemampuan untuk mengakses informasi RTGS bisa sangat strategis bagi otoritas pajak dalam memetakan kepatuhan wajib pajak
                            </Text>
                        </View>
                        
                      </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default BeritaSatu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});