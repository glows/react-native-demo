import React, { Component } from 'react';

import {
    View,
    Text,
    SectionList,
    StyleSheet,
} from 'react-native';


class Discover extends Component {

    render(){
        return(
            <View style={styles.container}>
            <Text>Discover </Text>
            <SectionList 
                sections={[
                    {title: 'D', data:['Devin']},
                    {title: 'j', data:['Jackson','James']},
                    {title: 'L', data:['Leslie','Lawrense']}
                ]}
                renderItem={ ({item}) => <Text style={styles.item}> {item} </Text> }
                renderSectionHeader ={
                    ({section}) => <Text style={styles.sectionHeader}>{ section.title }</Text>
                }
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247, 1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})

export default Discover;