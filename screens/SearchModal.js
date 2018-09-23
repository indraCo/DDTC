import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, ScrollView, TouchableOpacity, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

class SearchModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  goToNotification = () => {
      this.props.navigate('SearchBerita');
  };
                    // <TouchableOpacity onPress={()=> this.props.navigate('EditAccount', {id: 'Masuk EditAccount Cuy'})}

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={{marginTop: 22, flex: 1}}>
             <ScrollView scrollEventThrottle={16}>
                

                <View style={{ flex: 1, backgroundColor: 'white'}}>
                  <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20,}}>
                    <TouchableHighlight onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                      <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Icon name="md-close-circle" size={30} style={{color: 'red',}} />
                      </View>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={this.goToNotification}
                      style={{backgroundColor: '#F77B04', borderRadius: 5, flexDirection: 'row', marginTop: 10}}>
                      <Text style={{width: '90%', fontSize: 18, fontWeight: '400', paddingHorizontal: 15, paddingVertical: 15, color: 'white' }}>
                          Edit Account
                      </Text>
                      <View style={{width: '10%'}}>
                        <Icon name="ios-create" size={26} style={{color: 'white', paddingHorizontal: 5, paddingVertical: 15,}} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                  
              </ScrollView>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
            <Icon name="ios-search" size={30} style={{color: 'white' }} />
        </TouchableHighlight>
      </View>
    );
  }
}

export default SearchModal;