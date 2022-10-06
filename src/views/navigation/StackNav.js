
import React from 'react'
import 'react-native-gesture-handler';
import {
  Text,
  View,
} from 'react-native';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import OnBoardScreen from '../screens/OnBoardScreen';
import BottomNavigator from './BottomNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <View style = {{flex : 1}}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Login" component={Login} /> */}
                {/* <Stack.Screen name="Registration" component={Registration} /> */}
                <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
                <Stack.Screen name="Home" component={BottomNavigator} />
                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </View>
    )
}

export default StackNav