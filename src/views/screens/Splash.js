import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const {height, width} = Dimensions.get('screen');
const Splash = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          height: height,
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        imageStyle={{height: height, width: width, resizeMode: 'stretch'}}
        source={require('../../assets/splash.png')}>
        <View
          style={{
            height: 300,
            width: 300,
            resizeMode: 'contain',
            borderRadius: 500,
            borderColor: '#fff',
            borderWidth: 2,
          }}>
          <Image
            style={{
              height: 296,
              width: 296,
              resizeMode: 'contain',
              borderRadius: 500,
            }}
            source={require('../../assets/logo.png')}></Image>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Splash;
