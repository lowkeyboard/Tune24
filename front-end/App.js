/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import auth from '@react-native-firebase/auth';
import AppNav from './app/navigation/AppNavigator';
import {store} from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
};

export default App;
