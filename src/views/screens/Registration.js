import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';
const {height, width} = Dimensions.get('window');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Registration = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
     <KeyboardAwareScrollView>
      <View
        style={{
          height: height,
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 210,
            width: 210,
            resizeMode: 'contain',
            borderRadius: 500,
            borderColor: COLORS.primary,
            borderWidth: 9,
          }}>
          <Image
            style={{
              height: 192,
              width: 192,
              resizeMode: 'contain',
              borderRadius: 200,
            }}
            source={require('../../assets/logo.png')}></Image>
        </View>
        <View style={{marginHorizontal: 15, width: width - 30}}>
          <TextInputV placeholder={'First Name'}  />
          <TextInputV placeholder={'Last Name'} />
          <TextInputV placeholder={'Mobile'} />
          <TextInputV placeholder={'Email'} />
          <TextInputV placeholder={'Password'} showPass={true} />
          <View style={{marginTop: 20}}>
            <PrimaryButton
              title="Registration"
              onPress={() => props.navigation.navigate('BoardScreen')}
            />
          </View>
        </View>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const TextInputV = ({placeholder = '', showPass = false}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 10,
        marginTop: 10,
      }}>
      <TextInput placeholder={placeholder}></TextInput>
      {showPass && (
        <View
          style={{
            position: 'absolute',
            top: 12,
            right: 10,
            backgroundColor: COLORS.primary,
            paddingHorizontal: 5,
            paddingVertical: 3,
            borderRadius: 5,
          }}>
          <Text style={{color: COLORS.white}}>Show Password</Text>
        </View>
      )}
    </View>
  );
};
export default Registration;
