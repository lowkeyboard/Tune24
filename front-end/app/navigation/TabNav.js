import React, {useEffect, useRef} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from '@rneui/themed';
import {Text, View, StyleSheet, Image} from 'react-native';
import {ProfileMap} from '../pages/tabpages/Profile';
import Home from '../pages/tabpages/Home';
import {images, SIZES, COLORS} from '../constants';

const Drawer = createDrawerNavigator();

export default function TabNav() {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          // title: 'Home',
          drawerIcon: ({focused, size}) => <Icon name="home" color="#00aced" />,
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerLeftLabelVisible: false,
          headerTintColor: '#000000',
          headerTitle: () => (
            <View style={styles.headerView}>
              <Image
                source={images.headerlogo}
                style={{
                  padding: 10,
                  margin: 5,
                  height: 30,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />

              <Text style={styles.appTextBar}>Tune24</Text>
            </View>
          ),

          headerTitleContainerStyle: {
            elevation: 0,
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileMap}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="person" color="#00aced" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  appTextBar: {
    color: COLORS.blue,
    fontSize: 17,
    fontFamily: 'Helvetica',
    fontWeight: '700',
  },
  headerView: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
