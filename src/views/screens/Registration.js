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
import { Ainput } from '../../CommonComponents/common/Ainput';
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
          <Ainput placeholder={'First Name'}  />
          <Ainput placeholder={'Last Name'} />
          <Ainput placeholder={'Mobile'} />
          <Ainput placeholder={'Email'} />
          <Ainput placeholder={'Password'} eye={true} />
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

export default Registration;
