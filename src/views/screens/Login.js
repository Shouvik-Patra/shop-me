import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';
const {height, width} = Dimensions.get('window');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ainput } from '../../CommonComponents/common/Ainput';
const Login = props => {
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
          <Ainput style={{
            backgroundColor: '#fff',
            paddingHorizontal: 5,
            borderWidth: 1,
            borderColor: COLORS.primary,
          }} placeholder={'Email'} />
          <Ainput
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 5,
            borderWidth: 1,
            borderColor: COLORS.primary,
          }}
          secureTextEntry={true}
          // value={Password}
          // onChangeText={setPassword}
          eye={true}
          placeholder={'Password.'}></Ainput>
          {/* <TextInputV  placeholder={'Password'} showPass={true} /> */}
          <View style={{marginTop: 20}}>
            <PrimaryButton
              title="Login"
              onPress={() => props.navigation.navigate('Registration')}
            />
          </View>
          <Text
            style={{alignSelf: 'center', color: COLORS.primary, marginTop: 10}}>
            Forgot Password
          </Text>
        </View>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
