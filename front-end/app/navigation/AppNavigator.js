import React, {useRef} from 'react';
import firebase from '@react-native-firebase/app';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../pages/auth/LoginScreen';
import RegisterScreen from '../pages/auth/RegisterScreen';
import LandingScreen from '../pages/auth/LandingScreen';

import TabNav from './TabNav';

const Stack = createStackNavigator();

export function getActiveRouteName(state: any): any {
  const route = state.routes[state.index];
  // resolve nested navigators recursivly
  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
}

const AppNav = ({navigation}) => {
  const routeNameRef = useRef(null);

  return (
    <NavigationContainer
      onStateChange={state => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);
      }}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={() => {
            return {
              headerShown: true,
            };
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={() => {
            return {
              headerShown: false,
            };
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={() => {
            return {
              headerShown: false,
            };
          }}
        />
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={() => {
            return {
              headerShown: false,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
