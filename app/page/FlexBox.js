import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class FlexBox extends Component {
    render(){
        return(
            <View style={styles.container}>
            <Text>Hello</Text>
                <View style={styles.onebox}></View>
                <View style={styles.twobox}></View>
                <View style={styles.threebox}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
    },
    onebox:{
        width: 50,
        height:50,
        backgroundColor: 'powderblue',
        justifyContent: 'space-between',
    },
    twobox:{
        width: 50,
        height:50,
        backgroundColor: 'skyblue',
    },
    threebox:{
        width: 50,
        height:50,
        backgroundColor: 'steelblue',
    }
})