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
    ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

class Library extends Component {

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
                            <View style={{flex: 1, flexDirection: 'row',  paddingVertical: 20, height: height}}>
                                <TouchableOpacity style={{ height: 150, width: width / 2, paddingHorizontal: 20,}} 
                                    onPress={()=>this.props.navigation.navigate('DetailLibrary', {id: 123})}>
                                    <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', paddingVertical: 5, paddingHorizontal: 5}}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, height: 100, borderBottomWidth: 1, borderBottomColor: 'blue',  }}>
                                            <Image source={require('../assets/ddtc-icon-2.jpg')}
                                                style={{flex: 1,width: 60, height: 80 }}
                                            />
                                        </View>
                                        <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 10, textAlign: 'center', color: 'blue' }}>
                                            Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ height: 150, width: width / 2, paddingHorizontal: 20}} 
                                    onPress={()=>this.props.navigation.navigate('DetailLibrary', {id: 123})}>
                                    <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', paddingVertical: 5, paddingHorizontal: 5}}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, height: 100, borderBottomWidth: 1, borderBottomColor: 'blue',  }}>
                                            <Image source={require('../assets/ddtc-icon-2.jpg')}
                                                style={{flex: 1,width: 60, height: 80 }}
                                            />
                                        </View>
                                        <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 10, textAlign: 'center', color: 'blue' }}>
                                            Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ height: 150, width: width / 2, paddingHorizontal: 20}} 
                                    onPress={()=>this.props.navigation.navigate('DetailLibrary', {id: 123})}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, height: 100, borderBottomWidth: 1, borderBottomColor: 'blue' }}>
                                        <Image source={require('../assets/ddtc-icon-2.jpg')}
                                            style={{flex: 1,width: 60, height: 80 }}
                                        />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 10, textAlign: 'center', color: 'blue' }}>
                                        Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ height: 150, width: width / 2, paddingHorizontal: 20}} 
                                    onPress={()=>this.props.navigation.navigate('DetailLibrary', {id: 123})}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, height: 100, borderBottomWidth: 1, borderBottomColor: 'blue' }}>
                                        <Image source={require('../assets/ddtc-icon-2.jpg')}
                                            style={{flex: 1,width: 60, height: 80 }}
                                        />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 10, textAlign: 'center', color: 'blue' }}>
                                        Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ height: 150, width: width / 2, paddingHorizontal: 20}} 
                                    onPress={()=>this.props.navigation.navigate('DetailLibrary', {id: 123})}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, height: 100, borderBottomWidth: 1, borderBottomColor: 'blue' }}>
                                        <Image source={require('../assets/ddtc-icon-2.jpg')}
                                            style={{flex: 1,width: 60, height: 80 }}
                                        />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 10, textAlign: 'center', color: 'blue' }}>
                                        Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ height: 150, width: width / 2, paddingHorizontal: 20}} 
                                    onPress={()=>this.props.navigation.navigate('DetailLibrary', {id: 123})}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, height: 100, borderBottomWidth: 1, borderBottomColor: 'blue' }}>
                                        <Image source={require('../assets/ddtc-icon-2.jpg')}
                                            style={{flex: 1,width: 60, height: 80 }}
                                        />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 10, textAlign: 'center', color: 'blue' }}>
                                        Endus Kejahatan keuangan, Ditjen Pajak Kembangkan RTGS
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
export default Library;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});