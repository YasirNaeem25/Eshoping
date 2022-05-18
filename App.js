/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  LogBox
} from 'react-native';
import Home from './Screen/Home';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Splash from './Screen/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


LogBox.ignoreLogs(['Reanimated 2']);
LogBox.ignoreLogs
  ([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ])

export default function App() {

  const Tab = createBottomTabNavigator();
  function AppTabsNavigation() {
    return (
      <Tab.Navigator initialRouteName="HomeScreen"

        screenOptions={{
          tabBarInactiveBackgroundColor: "#F2F2F2",
          tabBarActiveBackgroundColor: "#F2F2F2",

          tabBarInactiveTintColor: "#200E32",
          tabBarActiveTintColor: "#5956E9",
          tabBarIconStyle: { marginTop: 4 },
          tabBarLabelStyle: { fontSize: 13, color: '#200E32', paddingBottom: 3 },
          tabBarStyle: { height: 55, position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4, borderTopWidth: 0 },
          style: { borderColor: '#F2F2F2' },
          headerShown: false,
          unmountOnBlur: true,
        }}
      >

        <Tab.Screen name='Home' component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={29} style={{ marginTop: 1 }} />
            ),
          }}
        />
         <Tab.Screen name='Login' component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={29} style={{ marginTop: 1 }} />
            ),
          }}
        />
         <Tab.Screen name='Signup' component={Signup}
          options={{
            tabBarLabel: 'Signup',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={29} style={{ marginTop: 1 }} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName='AppTabsNavigation'>
        <Drawer.Screen
          name="Splash"
          options={{ drawerLabel: 'Splash', headerShown: false }}
          component={Splash} />
       
        <Drawer.Screen name='AppTabsNavigation' component={AppTabsNavigation}
          options={{
            headerShown: false, drawerLabel: 'Our Story'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

