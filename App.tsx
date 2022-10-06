/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  Linking,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import COLORS from './src/consts/colors';
import {useState} from 'react';
import store from './src/store';
import {Provider, useSelector} from 'react-redux';
import StackNav from './src/views/navigation/StackNav';
import DrawerNav from './src/views/navigation/DrawerNav';
import SucessOrFailure from './src/mainscreen/popup/SucessOrFailure';
import TextInputPopUp from './src/mainscreen/popup/TextInputPopUp';
import MessgePopUp from './src/mainscreen/popup/MessagePopUp';
import ReactNativeModal from 'react-native-modal';
import {Colors} from './src/assets/common/common';
import {Rtext} from './src/CommonComponents/common/Rtext';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const [splash, setSplash] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplash(false);
  //   }, 3000);
  // }, []);
  // if (splash) {
  //   return <Splash />;
  // }

  return (
    //
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

        {/* <MainNav /> */}
        <StackNav/>
        
        {/* <DrawerNav/> */}
      </Provider>
    </NavigationContainer>
  );
};

const MainNav = () => {
  const state = useSelector((state: any) => state);
  const isUserLoggedIn = useSelector(
    (state: any) => state?.auth?.isUserLoggedIn,
  );
  const messagePop = useSelector((state: any) => state?.popup?.messagePop);
  const textInput = useSelector((state: any) => state?.popup?.textInput);
  const successFailure = useSelector(
    (state: any) => state?.popup?.successFailure,
  );
  const loader = useSelector((state: any) => state?.popup?.loader);
  const successFailureType = useSelector(
    (state: any) => state?.popup?.successFailureType,
  );
  // const NetInfo = useNetInfo();

 // console.log('state Data==>>==>>', state);

  console.log(
    'isUserLoggedIn==>>',
    isUserLoggedIn,
    'messagePop==>>',
    messagePop,
    'textInput==>>',
    textInput,
    'successFailure==>>',
    successFailure,
    'loader==>>',
    loader,
    'successFailureType==>>',
    successFailureType,
  );

  return (
    <View style={styles.container}>
      {messagePop && <MessgePopUp />}
      {textInput && <TextInputPopUp />}

      {successFailure && <SucessOrFailure isflag={successFailureType} />}

      {false && (
        <ReactNativeModal
          isVisible={true}
          backdropColor={Colors.tranparentBlack}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <View
              style={{
                paddingVertical: 30,
                width: '100%',
                backgroundColor: Colors.white,
                paddingHorizontal: 20,
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Rtext
                style={{
                  color: Colors.red,
                  fontSize: 18,
                  textAlign: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.red,
                  marginBottom: 10,
                }}>
                {' '}
                No Internet Connection
              </Rtext>

              <Rtext style={{textAlign: 'center'}}>
                {' '}
                {`Please enable your internet connect to accessing the features of GSTCOMMAN.`}
              </Rtext>
              <TouchableOpacity
                onPress={() => Linking.openSettings()}
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  backgroundColor: Colors.primaryColor,
                  paddingVertical: 7,
                  paddingHorizontal: 8,
                  borderRadius: 10,
                }}>
                <Rtext
                  style={{
                    color: Colors.white,
                    width: 200,
                    textAlign: 'center',
                  }}>
                  Go to the app Setting{' '}
                </Rtext>
              </TouchableOpacity>
            </View>
          </View>
        </ReactNativeModal>
      )}
      <DrawerNav />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
