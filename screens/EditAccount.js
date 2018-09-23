import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import SearchModal from './SearchModal'



class EditAccount extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>EditAccount</Text>
                <SearchModal />
            </View>
        );
    }
}
export default EditAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});