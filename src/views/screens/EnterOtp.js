import React from 'react';
import { View, Alert, BackHandler } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useDispatch } from 'react-redux';
import { LoaderOff, LoaderOn, setToastMsg } from '../../store/popup';
import { Rtext } from '../../CommonComponents/common/Rtext';
import { CusButtom } from '../../CommonComponents/common/CusButtom';
import { verifyOtp } from '../../store/auth';

const EnterOtp = prop => {
  const [timeLeft, setTimeLeft] = React.useState(30);
  const [resendHide, setResendHide] = React.useState(false);
  const CELL_COUNT = 5;
  const dispatch = useDispatch();
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [value, setValue] = React.useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const newemail=prop.route.params.email
  console.log('%%%%%%%%%%%%%email########',newemail);
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => prop.navigation.goBack() },
    ]);
    return true;
  };



  const otpVerify = () => { };
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  React.useEffect(() => {
    if (!timeLeft) {
      setResendHide(!resendHide);
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);
  return (
    <View>
      {/* <Image source={{uri : "https://dev-idiosys.s3-ap-southeast-1.amazonaws.com/elismuir/global_image/1611560370-02.png"}} style={{ height: 60, width: 180, resizeMode: 'contain', alignSelf: 'center' , }} /> */}
      <Rtext
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginBottom: 10,
          color: '#fff',
        }}>
        {' '}
        Verification code
      </Rtext>
      <View
        style={{
          borderRadius: 10,
          borderColor: 'silver',

          shadowColor: '#000',
          backgroundColor: '#fff',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          padding: 20,
          borderWidth: 0.1,
          elevation: 2,
          position: 'relative',
        }}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={4}
          rootStyle={{ marginVertical: 10, justifyContent: 'space-evenly' }}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Rtext
              key={index}
              style={
                {
                  width: 50,
                  height: 50,
                  lineHeight: 48,
                  fontSize: 24,
                  borderWidth: 2,

                  borderColor: '#D4D4D4',
                  textAlign: 'center',
                  borderRadius: 5,
                }
                // isFocused && { borderColor: '#000' },
              }
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Rtext>
          )}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Rtext style={{ color: '#224585', fontSize: 13, marginLeft: 15 }}>
            {timeLeft == 0 ? '' : timeLeft}
          </Rtext>
          {resendHide ? (
            <Rtext
              style={{ color: '#224585', fontSize: 13, marginRight: 15 }}
              onPress={() => {
                prop?.route?.params?.sendOtp();
                setTimeLeft(30), setResendHide(false);
              }}>
              {'Resend'}
            </Rtext>
          ) : (
            <Rtext style={{ color: '#000', fontSize: 13, marginLeft: 15 }}>
              {'Resend'}
            </Rtext>
          )}
        </View>
      </View>
      <CusButtom
        text={'Submit'}
        textStyle={{ color: '#fff' }}
        onpress={() => {

          if (value.length !== 4) {
            dispatch(setToastMsg("Please enter a valid Otp"));
            return
          } 
          dispatch(LoaderOn())
          dispatch(verifyOtp({
            email: newemail,
            code: value
          })).then((res) => {
            dispatch(LoaderOff())
            console.log("resresresresresres========>", res);
            prop.navigation.navigate('ResetPassword', {
              email: newemail,
              otp: value
            })
          })
            
          //prop.navigation.navigate('ResetPassword');
          //dispatch(userLoginSuccess());
        }}></CusButtom>
    </View>
  );
};
export default EnterOtp;
