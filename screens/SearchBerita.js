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
    Platform,
    StatusBar,
    TextInput,
    FlatList
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

class SearchBerita extends Component {
    constructor(props) {
      super(props);

      this.state = {
        dataSource: [],
        isLoading: true,
        searchVal: ''
      };
    }

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 70 + StatusBar.currentHeight
        }
    }

    componentDidMount() {
      this.getCategories();
    }

    renderItem = ({item}) => {
      return(
        <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}
          onPress={()=>this.props.navigation.navigate('DetailPeraturan', {id: item._id})}>
          <View style={{width: '30%', paddingVertical: 2, justifyContent: 'center', alignItems: 'center', }}>
            <Image style={{width: '80%', height: 80 }}
              source={{ uri: item.imageUrl }}
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
              {item.name} / {item._id}
            </Text>
          </View>
        </TouchableOpacity>
      )
    }  

    getCategories = () => {

      const tokkenStorage = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTM5YzM5ZGZhYjRmMTEyMzQ0YzQ4NDQiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1MzUyOTg5ODAsImV4cCI6MTUzNTUxNDk4MH0.aM34VHewUiVRXhZBLDwgeHAMrTUX3NcnPiGPHffBtIc';
      const uri = 'http://128.199.196.68:7000/api/v1/categories/subs';
      let value = `Bearer ${tokkenStorage}`;

      let req = new Request(uri, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          "Authorization": value
        }
      });
      
      fetch(req) 
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then((responseJson) =>{
          this.setState({
            dataSource: responseJson.docs,
            isLoading: false
          })
        })
    }

    filterSearch(text) {
      // console.warn(this.state.searchVal)

      const URL = "http://128.199.196.68:7000/api/v1/products?search=";
      
      const tokkenStorage = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTM5YzM5ZGZhYjRmMTEyMzQ0YzQ4NDQiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1MzUyOTg5ODAsImV4cCI6MTUzNTUxNDk4MH0.aM34VHewUiVRXhZBLDwgeHAMrTUX3NcnPiGPHffBtIc';
      const uri = URL + this.state.searchVal;
      let value = `Bearer ${tokkenStorage}`;
      // console.warn(uri)

      let req = new Request(uri, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          "Authorization": value
        }
      });
      
      fetch(req) 
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then((responseJson) =>{
          this.setState({
            dataSource: responseJson.docs,
            isLoading: false
          })
        })

    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    <ScrollView scrollEventThrottle={16}>

                      <View style={{ flex: 1, backgroundColor: 'white'}}>
                        <View style={{ height: this.startHeaderHeight, backgroundColor: '#2B519A', borderBottomWidth: 2, borderBottomColor: '#F77B04' }}>
                            <View style={{flex: 1, flexDirection: 'row', height: this.startHeaderHeight - 22, marginTop: 20, paddingHorizontal: 20}}>
                                <TouchableOpacity style={{width: '10%', justifyContent: 'center', alignItems: 'center', marginRight: 30}}
                                  onPress={()=>this.props.navigation.goBack()}>
                                     <Icon name="md-arrow-back" size={30} style={{color: 'white' }}/>
                                </TouchableOpacity>
                                <TextInput 
                                  style={{width: '80%', height: 40, borderWidth: 0, borderColor: '#cecece', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 4, marginTop: 15, paddingHorizontal: 10, paddingVertical: 5, color: '#ffffff'}}
                                  onChangeText={(value) => this.setState({searchVal: value})}
                                  value={this.state.searchVal}
                                  onSubmitEditing={(text) => this.filterSearch(text)}
                                  underlineColorAndroid="transparent"
                                />
                                <View  
                                  style={{zIndex: 1, position: 'absolute', bottom: 13, right: 23, borderRadius: 4, backgroundColor: '#F77B04', width: 40, height: 40, justifyContent: 'center', alignItems: 'center',}}>
                                    <Icon name="ios-search" size={24} style={{color: 'white' }} />
                                </View >
                            </View>                        
                        </View>

                        <View style={{ borderBottomWidth: 5, borderColor: '#dddddd' }}>
                          <TouchableOpacity style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#dddddd'  }}
                            onPress={()=>this.props.navigation.navigate('DetailPeraturan', {id: 'test Id Masuk'})}>
                            <View style={{width: '30%', paddingVertical: 2, justifyContent: 'center', alignItems: 'center', }}>
                              <Image style={{width: '80%', height: 80 }}
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

                          <View style={styles.container}>
                            <View  style={{ flex: 1, flexDirection: 'row', marginBottom: 3}}>
                              <FlatList
                                  data={this.state.dataSource}
                                  renderItem={this.renderItem}
                                  keyExtractor={(item, index) => index}
                                  numColumns={1}
                                />
                            </View>

                          </View>
                                                                                   
                        </View>
                      </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default SearchBerita;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});