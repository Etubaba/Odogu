/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import { store } from './Src/features/store';
import tw from 'twrnc'

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './Src/screens/Home'

import { Provider } from 'react-redux';



const App = () => {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Home />

      </NavigationContainer>

    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
