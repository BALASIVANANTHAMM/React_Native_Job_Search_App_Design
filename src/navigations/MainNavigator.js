import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from "./TabNavigator";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();
const MainNavigator = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Root" 
            component={TabNavigator} 
            options=
            {{
                headerShown: false,
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default MainNavigator;