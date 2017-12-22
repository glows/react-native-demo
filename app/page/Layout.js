import React, { Component } from 'react';

import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
} from 'react-native'

class Layout extends React.Component {
    static navigationOptions = {
        title: "Layout"
    };
    constructor(props){
        super(props)
        this.state = {text: ''}
    };
    _onPressButton = () =>{
        Alert.alert("print this msg:'You tapped the button!'")
    };
    jumpToOK = () => {
      const { navigate } = this.props.navigation
      navigate('Networking')
    };
    goToWorld = () => {
      const { navigate } = this.props.navigation
      navigate('FlexBox')
    };

    render(){
        return (
          console.log("hello"),
            <ScrollView style={styles.container}>
            <TextInput
                style={{height: 40}}
                placeholder="Type here"
                onChangeText={(text) => this.setState({text})}
            />

            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text}
            </Text>
            <Button
                onPress={()=> this.jumpToOK()}
                title= "OK"
                color= "#841584"
            />

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
        <Text style={{fontSize:96}}>If you like</Text>
        </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 0,
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      padding: 20,
      color: 'white'
    }
  })
  

export default Layout;