import React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'



import HomeView from '../page/HomeView';
import Layout from '../page/Layout';
import FlexBox from '../page/FlexBox';
import Discover from '../page/Discover';
import Networking  from "../page/Networking";

export const Tabs = TabNavigator({
    HomeView:{
        screen: HomeView,
        navigationOptions: {
            tabBarLabel: 'Home',
        }
    },
    Layout: {
        screen: Layout,
    }
},{
    headerMode: 'none',
})


const Tab = TabNavigator(
    {
        HomeView: {
            screen:  HomeView,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '发现音乐',
                
            })
        },
        Layout: {
            screen: Layout,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的音乐',
                
            })
        },
        Discover: {
            screen: Discover,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '发现'
            })
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        initialRouteName: 'HomeView',
        lazy: true,
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: '#333',
            // style: {
            //     backgroundColor: '#333333'
            // }
        }
    }
);

export const GoToStack = StackNavigator({
    FlexBox:{
        screen: FlexBox,
    },
    
})


export const AllRouter = StackNavigator({
    Tabs:{
        screen:Tab
    },
    FlexBox:{
        screen: FlexBox,
    },
    Networking: {
        screen: Networking,
    }
})