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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './Src/screens/Home'
import GetRide from './Src/screens/GetRide'
import Food from './Src/screens/Food'
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { Provider } from 'react-redux';



const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>

            <Stack.Screen
              name='home'
              component={Home}
              options={{ headerShown: false }} />
            <Stack.Screen
              name='food'
              component={Food}
              options={{ headerShown: false }} />
            <Stack.Screen
              name='ride'
              component={GetRide}
              options={{ headerShown: false }} />

          </Stack.Navigator>



        </SafeAreaProvider>
      </NavigationContainer>

    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
