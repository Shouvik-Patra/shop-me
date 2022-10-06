import React, { useState } from 'react';
import { Ainput } from '../../CommonComponents/common/Ainput';
import { CusButtom } from '../../CommonComponents/common/CusButtom';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoaderOff, LoaderOn, setSucessFailerMsg, setToastMsg } from '../../store/popup';
import { sendotp } from '../../store/auth';
import { Rtext } from '../../CommonComponents/common/Rtext';


const ForgotEmail = props => {
  const [Email, setEmail] = useState('')
  const dispatch = useDispatch()



  const sendOtp = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(Email) === false) {
      // Alert.alert('Enter Correct Email')
      dispatch(setToastMsg('Please enter a valid Email address'));
      return;
    }
    dispatch(LoaderOn())
    dispatch(
      sendotp({
        email: Email,
      }),
    ).then(res => {
      console.log('resssss====>', res.payload);
      dispatch(LoaderOff())
      // if (res?.payload?.statusText === 'error') {
      //   //   dispatch(setToastMsg(res?.payload?.message));
      //   dispatch(
      //     setSucessFailerMsg({
      //       successFailureheaderTxt: 'Oops',
      //       successFailureContent: res?.payload?.message,
      //       successFailureType: false,
      //     }),
      //   );
      // } 
     {
        setTimeout(() => {
          dispatch(
            setSucessFailerMsg({
              successFailureheaderTxt: 'Otp sent',
              successFailureContent: 'Please check the  your email for otp. ',
              successFailureType: true,
            }),
          );
        }, 1500);
      }
    });
  };
  return (
    <SafeAreaView>
      <Rtext
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: '#fff',
        }}>
        {' '}
        Forgot Password
      </Rtext>
      <Ainput placeholder={'Email Address'}
        value={Email}
        onChangeText={setEmail}
      />

      <CusButtom
        onpress={() => {
          let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
          if (reg.test(Email) === false) {
            // Alert.alert('Enter Correct Email')
            dispatch(setToastMsg('Please enter a valid Email address'));
            return;
          }

          dispatch(
            sendotp({
              email: Email,
            }),
          ).then(res => {
            console.log('resssss====>', res.payload);

            if (res?.payload?.statusText === 'error') {
              //   dispatch(setToastMsg(res?.payload?.message));
              dispatch(
                setSucessFailerMsg({
                  successFailureheaderTxt: 'Oops',
                  successFailureContent: res?.payload?.message,
                  successFailureType: false,
                }),
              );
            } else {
              props.navigation.navigate('EnterOtp', { email: Email }, { sendOtp: sendOtp });

              setTimeout(() => {
                dispatch(
                  setSucessFailerMsg({
                    successFailureheaderTxt: 'Otp sent',
                    successFailureContent:
                      'Please check the  your email for otp. ',
                    successFailureType: true,
                  }),
                );
              }, 1500);
            }
          });
        }}
        // onpress={() => }
        text={'Send Otp'}></CusButtom>
    </SafeAreaView>
  );
};
export default ForgotEmail;
//props.navigation.navigate('Verification')