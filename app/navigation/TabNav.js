import React, {useEffect, useRef} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Profile from '../pages/tabpages/Profile';
import Home from '../pages/tabpages/Home';

const Drawer = createDrawerNavigator();

export default function TabNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
