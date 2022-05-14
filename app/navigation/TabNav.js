import React, {useEffect, useRef} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from '@rneui/themed';

import Profile from '../pages/tabpages/Profile';
import Home from '../pages/tabpages/Home';
import {images, SIZES, COLORS} from '../../constants';

const Drawer = createDrawerNavigator();

export default function TabNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Tune24',
          drawerIcon: ({focused, size}) => (
            <Icon name="g-translate" color="#00aced" />
          ),
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerLeftLabelVisible: false,
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleContainerStyle: {},
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
