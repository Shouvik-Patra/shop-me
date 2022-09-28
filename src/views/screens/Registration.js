import React, {useState} from 'react';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Ainput} from '../../CommonComponents/common/Ainput';
import {useDispatch} from 'react-redux';
import { registration } from '../../store/auth';
const Registration = props => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [DOB, setDOB] = useState('');
  const [Password, setPassword] = useState('');
  const [DateModal, setDateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
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
            <Ainput
              value={name}
              onChangeText={setName}
              placeholder={'User Name'}
            />
            <Ainput
              value={Phone}
              onChangeText={setPhone}
              placeholder={'Mobile'}
            />
            <Ainput
              value={Email}
              onChangeText={setEmail}
              placeholder={'Email'}
            />
            <Ainput
              value={Password}
              onChangeText={setPassword}
              placeholder={'Password'}
              eye={true}
            />
            <View style={{marginTop: 20}}>
              <TouchableOpacity
              >
                <PrimaryButton
                onPress={()=>{
                  dispatch(
                    registration({
                    username: name,
                    email: Email,
                    password: Password,
                    ph: Phone,
                    dob: "10/09/1995"
                  })).then(()=>{

                    props.navigation.navigate('Login')
                    setName(false),
                    setEmail(false),
                    setPhone(false),
                    setPassword(false)
                  })
                }}
                  title="Registration"
                 // onPress={() => props.navigation.navigate('BoardScreen')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Registration;
