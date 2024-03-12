import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, Animated, View, Image, icons } from 'react-native';
import HomeScreen from "../screens/HomeScreen";
import RoleScreen from "../screens/RoleScreen";
import ApplyScreen from "../screens/ApplyScreen";
import InterviewScreen from "../screens/InterviewScreen";
import OfferScreen from "../screens/OfferScreen";


const Tab = createBottomTabNavigator();
const TabNavigator=()=>{
    return <Tab.Navigator
    initialRouteName="Dashboard"
    activeColor="#000080"     //#000080     #f0edf6
    inactiveColor="#3e3465"
    barStyle={{backgroundColor:"#000080"}}         //#694fad
    screenOptions={{
        headerShown:false,
        tabBarShowLabel:true,
        tabBarActiveTintColor:'#000080'         //#e91e63
    }}>
            <Tab.Screen name="Dashboard" component={HomeScreen} options={{
                tabBarIcon:({color,size})=>{
                    return <Image source={require('../constants/icons/dashb.png')} resizeMode="cover" style={{
                        width:25,height:25,
                    }}/>
                    // <MaterialCommunityIcons name="home" color={color} size={size}/>
                }
            }}/>
            <Tab.Screen name="Roles" component={RoleScreen} options={{
                tabBarIcon:()=>{
                    return <Image source={require('../constants/icons/search.png')} resizeMode="cover" style={{
                        width:25,height:25,
                    }}/>
                }
            }}/>
            <Tab.Screen name="Applied" component={ApplyScreen} options={{
                tabBarIcon:()=>{
                    return <Image source={require('../constants/icons/applies.png')} resizeMode="cover" style={{
                        width:25,height:25,
                    }}/>
                }
            }}/>
            <Tab.Screen name="Interview" component={InterviewScreen} options={{
                tabBarIcon:()=>{
                    return <Image source={require('../constants/icons/roles.png')} resizeMode="cover" style={{
                        width:25,height:25,
                    }}/>
                }
            }}/>
            <Tab.Screen name="Offer" component={OfferScreen} options={{
                tabBarIcon:()=>{
                    return <Image source={require('../constants/icons/offer.png')} resizeMode="cover" style={{
                        width:25,height:25,
                    }}/>
                }
            }}/>
    </Tab.Navigator>

}

export default TabNavigator;