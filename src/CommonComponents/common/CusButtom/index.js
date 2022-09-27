import React, {useState} from 'react';
import {ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import {Rtext} from '../Rtext';
import {Colors, Fonts} from '../../../assets/common/common';
import {View} from 'react-native-animatable';
const CusButtom = ({
  children,
  text,
  onpress,
  BTNstyle,
  textStyle,
  image,
  ImgStyle,
  source,
  loader,
  ActivityIndicatorColor = '#fff',
}) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={{
        flexDirection: 'row',
        backgroundColor: '#4785ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: 15,
        borderColor: '#fff',
        borderWidth: 1,
        ...BTNstyle,
      }}>
      {image && <Image style={{...ImgStyle}} source={source}></Image>}

      {loader ? (
        <ActivityIndicator color={ActivityIndicatorColor}></ActivityIndicator>
      ) : (
        <Rtext style={{color: '#fff', ...styles.textStyle, ...textStyle}}>
          {text}
        </Rtext>
      )}

      {children}
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    padding: 8,
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0, .6)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: Fonts.latoRegular,
    letterSpacing: 0.3,
  },
};

const RadioButton = ({arrlist = [], selectedValue, setModal , setradioValue}) => {
  const [isSelectedIndex, setIsselectedIndex] = useState(-1);

  return (
    <View>
      {arrlist.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => {
              setModal(false);
            }, 800);
            setradioValue(item)
            setIsselectedIndex(index);
          }}
          style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            style={{
              height: 24,
              width: 24,
              resizeMode: 'contain',
              marginRight: 20,
            }}
            source={
              index === isSelectedIndex
                ? require('../../../assets/icons/radioon.png')
                : require('../../../assets/icons/radiooff.png')
            }
          />
          <Rtext>{item}</Rtext>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export {CusButtom, RadioButton};