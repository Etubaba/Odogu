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

import { Provider } from 'react-redux';



const App = () => {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <View>
          <Text className={tw`bg-green-900`}>Hello World</Text>
        </View>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
