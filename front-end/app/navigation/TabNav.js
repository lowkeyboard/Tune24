import React, {useEffect, useRef} from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Icon} from '@rneui/themed';
import {Text, View, StyleSheet, Image} from 'react-native';
import Profile from '../pages/tabpages/Profile/Profile';
import Home from '../pages/tabpages/Home/Home';
import {images, SIZES, COLORS} from '../constants';
import {firebase} from '@react-native-firebase/auth';

const Drawer = createDrawerNavigator();

export default function TabNav({navigation}) {
  function CustomDrawerList(props) {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
        {/*all of the drawer items*/}
        <DrawerItemList {...props} style={{borderWidth: 1}} />
        <View style={{flex: 1, marginVertical: 20, borderWidth: 0}}>
          {/* here's where you put your logout drawer item*/}
          <DrawerItem
            label="Log out"
            onPress={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  navigation.navigate('Login');
                });
            }}
            style={{flex: 1, justifyContent: 'flex-end'}}
          />
        </View>
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <CustomDrawerList {...props} />
          </DrawerContentScrollView>
        );
      }}>
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
        name="Videos"
        component={Profile}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="camera" color="#00aced" />
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
