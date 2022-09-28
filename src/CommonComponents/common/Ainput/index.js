import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import { Colors, Fonts } from '../../../assets/common/common';
import COLORS from '../../../consts/colors';
import { Rtext } from '../Rtext';
// import Ionicons from 'react-native-vector-icons/Ionicons';
const winHeight = Dimensions.get('window').height
const Ainput = ({
  value,
  onChangeText = () => { },
  multiline = false,
  onBlur = () => { },
  containerStyle,
  placeholder = '',
  numberOfLines = 1,
  secureTextEntry = false,
  editable = true,
  style = {},
  onFocus,
  image = false,
  eye = false,
  source , keyboardType = 'default'
}) => {

  const [lcSecureTextEntry, setLcSecureTextEntry] = useState(secureTextEntry);
  return (
    <View style={{ ...styles.containerStyle, ...containerStyle }}>


      {image && (
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => {
            setLcSecureTextEntry(!lcSecureTextEntry);
          }}>

          <Image
            style={{ height: 20, width: 20, resizeMode: 'stretch' }}
            source={source}
          />


        </TouchableOpacity>
      )}
      <TextInput

        onFocus={onFocus}
        value={value}
        onChangeText={onChangeText}
        style={editable ? (image ? { ...styles.inputStyle, paddingLeft: 35, ...style } : { ...styles.inputStyle, ...style }) : styles.inputEditableFalseStyle}
        editable={editable}
        // style={[styles.inputStyle,style, {borderColor:border, paddingRight: view ? 20 : 15}] }
        autoCorrect={false}
        autoCapitalize = {'none'}
        placeholder={placeholder}
        placeholderTextColor={Platform.OS === 'ios' ? Colors.silver : Colors.silver}
        onBlur={onBlur}
        multiline={multiline}
        numberOfLines={numberOfLines}
        keyboardType = { keyboardType  }
        secureTextEntry={lcSecureTextEntry}
      />
  
  {
    eye &&<TouchableOpacity style = {{position : 'absolute' , top : 10 , right : 10}} onPress = {() => setLcSecureTextEntry(prev => !prev)}>
      {
        lcSecureTextEntry ? <Image style = {styles.icon} source = {require('../../../assets/icons/eye.png')}/> : 
        <Image style = {styles.icon} source = {require('../../../assets/icons/eyeclose.png')}/>
      }
  
  </TouchableOpacity>
  }

   
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    // width: 70,
    marginTop: 15,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.2,
    elevation: 5,
    shadowRadius: 15,
    shadowOffset: { width: 2, height: 2 },
  },
  inputStyle: {
    padding: 10,
    shadowColor: '#000',

    paddingLeft: 15,
    paddingRight: 15,

    fontSize: 15,
    lineHeight: 20,
    color: 'black',
    
    borderColor: COLORS.primary,
    borderWidth: 1,
    fontFamily: Fonts.latoRegular,
    height: 45,
    borderRadius: 10,
  },

  inputEditableFalseStyle: {
    padding: 10,
    shadowColor: '#000',

    paddingLeft: 15,
    paddingRight: 15,

    fontSize: 15,
    lineHeight: 20,
    color: '#224585',
    borderColor: '#224585',
    borderWidth: 0.5,

    height: 45,
    borderRadius: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: 12,
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: COLORS.primary,

  },
});



export { Ainput };
