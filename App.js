/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './Screen/Home';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Splash from './Screen/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Splash"
          options={{ drawerLabel: 'Splash' }}
          component={Splash} />
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: 'Home' }}
          component={Home} />
        
        <Drawer.Screen
          name="Signup"
          options={{ drawerLabel: 'Signup' }}
          component={Signup} />
        <Drawer.Screen
          name="Login"
          options={{ drawerLabel: 'Login' }}
          component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

