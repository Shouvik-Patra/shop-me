import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Colors, Fonts} from '../../assets/common/common';
import {RootState} from '../../store';
import {setToastMsgToNUll} from '../../store/popup';
// import { setToastMsgToNUll } from '../../store/mentorRegistration/MentorRegistration';

const customtoast = () => {
  const dispatch = useDispatch();
  const toastMsg = useSelector(state => state.popup.message);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
    }).start();
  };

  const animations = () => {
    fadeIn();
    setTimeout(() => {
      fadeOut();
      dispatch(setToastMsgToNUll());
    }, 4000);
  };
  useEffect(() => {
    if (toastMsg !== '') {
      animations();
    }
  }, [toastMsg]);
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };
  return (
    <Animated.View
      style={{
        ...styles.viewStyle,
        opacity: fadeAnim,
        paddingHorizontal: 15,
        top:
          Platform.OS === 'ios'
            ? toastMsg === ''
              ? -100
              : 50
            : toastMsg === ''
            ? -100
            : 20,
      }}>
      <Text style={{color: Colors.white, fontFamily: Fonts.latoBold}}>
        {toastMsg}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    position: 'absolute',
    right: 0,
    paddingVertical: 11,
    width: Dimensions.get('window').width - 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F33A6A',
    alignSelf: 'center',
    borderRadius: 15,
    marginHorizontal: 15,
  },
});
export default customtoast;
