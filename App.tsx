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
  StatusBar,
  StyleSheet,
} from 'react-native';

import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import COLORS from './src/consts/colors';
import { useState } from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import StackNav from './src/views/navigation/StackNav';
import DrawerNav from './src/views/navigation/DrawerNav';
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
        <DrawerNav />

        
        {/* <StackNav/> */}
      </Provider>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
