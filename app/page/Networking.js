import React, { Component } from 'react';

import { 
    View,
    Text,
    ListView,
    ActivityIndicator,

 } from "react-native";

 class Networking extends Component {
     constructor(props) {
         super(props);
         this.state = {
             isLoading: true
         }
     }

     componentDidMount() {
         return fetch('https://facebook.github.io/react-native/movies.json')
         .then( (response) => response.json())
         .then(( responseJson ) => {
             let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
             console.log('responseJson :', responseJson)

             this.setState({
                 isLoading: false,
                 dataSource: ds.cloneWithRows(responseJson.movies),
             }, function(){

             })
         })
         .catch((error) => {
             console.log(error);
         })
     }

    render(){
        if(this.state.isLoading){
             return (
            <View style={{flex:1, paddingTop:20}}>
              <ActivityIndicator />
            </View>
        );
        }

        return (

            <View style={{flex:1, paddingTop:20}}> 
            <Text> Movies </Text>

            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text> { rowData.title } , {rowData.releaseYear}</Text>}
            />
            </View>
        );
       
    }
 }

 export default Networking;