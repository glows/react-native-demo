/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground
} from 'react-native';

import {NavigationActions} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Greeting extends Component{
  render(){
    return(
      <Text>Hello {this.props.name}</Text>
    );
  }
}

class Blink extends Component{
  constructor(props){
    super(props);
    this.state ={showText: true};
    //Toggle the state every second
    setInterval( ()=> {
      this.setState(previousState => {
        return { showText: !previousState.showText};
      });
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    );
  }
} 


export default class App extends Component {
    static navigationOptions ={
        title: "Welcome"
    }
    goToWorld = () => {
      const { navigate } = this.props.navigation
      navigate('FlexBox')
    }

  render() {
    return (
      console.log("hello"),
      <View style={styles.container}>
      <ImageBackground style= {{width:80, height: 80}}
        source={require('../image/logo-og.png')}>

        <Text>Inside</Text>

      </ImageBackground>
      <Image source={require('../image/logo-og.png')} style={{width:193, height:110}}/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text></Text>
        
        <Greeting name="Your Name "/>

        <Blink text="Sara"/>

        <View style={{width:50, height: 50, backgroundColor: "powderblue"}}></View>
      <View style={{width:100, height: 100, backgroundColor: "skyblue"}}></View>
      <View style={{width:150, height: 150, backgroundColor: "steelblue"}}></View>

      <Button title="Layout With FlexBox" onPress={() => this.goToWorld()}/>
    
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  hello:{
    fontSize: 50,
    color: 'black',
  }
});
