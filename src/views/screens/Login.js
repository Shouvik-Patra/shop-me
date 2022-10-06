import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import jwt_decode from 'jwt-decode';
const { height, width } = Dimensions.get('window');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ainput } from '../../CommonComponents/common/Ainput';
import { LoaderOff, LoaderOn, setToastMsg } from '../../store/popup';
import { useDispatch } from 'react-redux';
import { login, setUserTokenInfo, userLoginSuccess } from '../../store/auth';
import { CusButtom } from '../../CommonComponents/common/CusButtom';
import { Rtext } from '../../CommonComponents/common/Rtext';
const Login = props => {

  useEffect(() => {
    AsyncStorage.setItem('token', '');
  }, []);

  dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [emailLogin, setEmailLogin] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <View style={{ flexDirection: 'row-reverse', marginTop: 20,marginRight:150 }}>
            <TouchableOpacity onPress={() => {
              setEmailLogin(true);
              setEmail("");
            }} style={{ flexDirection: 'row', alignItems: 'center', width: 100 }}>
              <Rtext style={{ color: COLORS.primary }}>Email</Rtext>
              <View style={{ marginLeft: 10, backgroundColor: emailLogin ? COLORS.primary : COLORS.white, height: 25, width: 40, borderRadius: 15, borderColor: !emailLogin ? COLORS.secondary : COLORS.light, borderWidth: 3 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setEmailLogin(false);
              setEmail("+91-");
            }} style={{ flexDirection: 'row', alignItems: 'center', width: 100 }}>
              <Rtext style={{ color: COLORS.primary }}>Mobile</Rtext>
              <View style={{ marginLeft: 10, backgroundColor: !emailLogin ? COLORS.primary : COLORS.white, height: 25, width: 40, borderRadius: 15, borderColor: emailLogin ? COLORS.secondary : COLORS.light, borderWidth: 3 }} />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 15, width: width - 30 }}>
            <Ainput
              keyboardType={emailLogin ? "email-address" : 'numeric'}
              placeholder={emailLogin ? 'Email' : 'Mobile'}
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: 5,
                borderWidth: 1,
                borderColor: COLORS.primary,
              }}
              value={Email}
              onChangeText={(val) => {
                if (emailLogin) {
                  setEmail(val)
                } else {
                  if (val.length > 3) {
                    setEmail(val)
                  }
                }
              }}

            />
            <Ainput
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: 5,
                borderWidth: 1,
                borderColor: COLORS.primary,
              }}
              secureTextEntry={true}
              value={Password}
              onChangeText={setPassword}
              eye={true}
              placeholder={'Password.'}></Ainput>
            {/* <TextInputV  placeholder={'Password'} showPass={true} /> */}
            <View style={{ marginTop: 20 }}>
              <CusButtom
                text={'LogIn'}
                onpress={async () => {
                  if (emailLogin) {
                    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                    if (reg.test(Email) === false) {
                      console.log("reg.test(Email)", reg.test(Email), Email);
                      dispatch(setToastMsg('Please enter a valid Email address'));
                      return;
                    } else if (Password.length < 3) {
                      dispatch(setToastMsg('Please enter Correct password'));
                      return;
                    }

                    dispatch(LoaderOn());
                    dispatch(
                      login({
                        email: Email,
                        password: Password.toString(),
                      }),
                    )
                      .then(async Reqdata => {

                        console.log('Reqdata  ==>', Reqdata);
                        if (Reqdata?.payload?.success) {
                          await AsyncStorage.setItem('token', Reqdata?.payload?.token);
                          dispatch(userLoginSuccess());
                          console.log('Reqdata  ==>', Reqdata);
                          var userData = jwt_decode(Reqdata?.payload?.token.replace('Bearer ', ''));
                          console.log("TOKEN Data==>>==>>", userData);
                          dispatch(setUserTokenInfo(userData))
                        } else {
                          dispatch(
                            setToastMsg('Please enter correct email or Password .'),
                          );
                        }

                        dispatch(LoaderOff());
                      })
                      .catch(errr => {
                        console.log('====================================');
                        console.log('errr', errr);
                        console.log('====================================');
                        dispatch(
                         setToastMsg('Please enter correct email or Password .'),
                        );
                        dispatch(LoaderOff());
                      });
                  }else {
                    //Alert.alert("Email"+Email)
                    if (Email.length !== 14) {
                      dispatch(setToastMsg('Please enter a valid ph no'));
                      return;
                    } else if (Password.length < 3) {
                      dispatch(setToastMsg('Please enter Correct password'));
                      return;
                    }
      
                    dispatch(LoaderOn());
                    dispatch(
                      login({
                        ph: Email.replace(/[^a-zA-Z0-9]/g, ''),
                        password: Password.toString(),
                      }),
                    )
                      .then(async Reqdata => {
      
                        console.log('Reqdata  ==>', Reqdata);
                        if (Reqdata?.payload?.success) {
                          await AsyncStorage.setItem('token', Reqdata?.payload?.token);
                          dispatch(userLoginSuccess());
                          console.log('Reqdata  ==>', Reqdata);
                          var userData = jwt_decode(Reqdata?.payload?.token.replace('Bearer ', ''));
                          console.log("TOKEN Data==>>==>>", userData,);
                          dispatch(setUserTokenInfo(userData))
                        } else {
                          dispatch(
                            setToastMsg('Please enter correct Phone no. or Password .'),
                          );
                        }
      
                        dispatch(LoaderOff());
                      })
                      .catch(errr => {
                        console.log('====================================');
                        console.log('errr', errr);
                        console.log('====================================');
                        dispatch(
                          setToastMsg('Please enter correct email or Password .'),
                        );
                        dispatch(LoaderOff());
                      });
                  }
                }}
              
                title="Login"
              />
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('ForgotEmail')}>
            <Text
              style={{
                alignSelf: 'center',
                color: COLORS.primary,
                marginTop: 10,
              }}>
              Forgot Password
            </Text></TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Registration')
              }}>
              <Rtext
                style={{
                  alignSelf: 'center',
                  color: COLORS.primary,
                  marginTop: 10,
                }}>
                New user?
              </Rtext>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
