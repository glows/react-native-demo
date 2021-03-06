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
} from 'react-native';

import { StackNavigator } from 'react-navigation';
// const kj = StackNavigator({
//   Home: {screen: HomeScreen},
//   Layout: { screen: LayoutScreen}, 
// })


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


export default class App extends Component<{}> {
  render() {
    let pic = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    // const { navigate } = this.props.navigation;/
    
    return (
      <View style={styles.container}>
      <Image source={pic} style={{width:193, height:110}}/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text></Text>
        
        <Greeting name="Your Name "/>

        <Blink text="Sara"/>
        
        <View style={{width:50, height: 50, backgroundColor: "powderblue"}}></View>
      <View style={{width:100, height: 100, backgroundColor: "skyblue"}}></View>
      <View style={{width:150, height: 150, backgroundColor: "steelblue"}}></View>

      <Button title="Layout With FlexBox"/>
    
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
