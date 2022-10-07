
import React from 'react'
import 'react-native-gesture-handler';
import {
  Text,
  View,
} from 'react-native';
import Registration from '../screens/Registration';
import OnBoardScreen from '../screens/OnBoardScreen';
import BottomNavigator from './BottomNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import order from '../screens/order';
import ForgotEmail from '../screens/ForgotEmail';
import Login from '../screens/Login';
import EnterOtp from '../screens/EnterOtp';
import ResetPassword from '../screens/ResetPassword';
const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <View style = {{flex : 1}}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Login" component={Login} /> 
                <Stack.Screen name="Registration" component={Registration} />  */}
                <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
                <Stack.Screen name="Home" component={BottomNavigator} />
                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="order" component={order}/>
                {/* <Stack.Screen name="ForgotEmail" component={ForgotEmail}/>
                <Stack.Screen name="EnterOtp" component={EnterOtp}/>
                <Stack.Screen name="ResetPassword" component={ResetPassword}/> */}
            </Stack.Navigator>
        </View>
    )
}

export default StackNav