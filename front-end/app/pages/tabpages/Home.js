import React, {useEffect} from 'react';
import {Icon, SearchBar, Card} from '@rneui/themed';
import {Text, View, StyleSheet, Image} from 'react-native';
import auth from '@react-native-firebase/auth';

import {images, SIZES, COLORS} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home({navigation}) {
  let username = 'Alex';
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}>
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeTitleSmall}>Hi, {username}</Text>
        <Text style={styles.welcomeTitleLarge}>Stream the newest videos!</Text>
        <View
          style={{
            padding: 10,
          }}></View>
        <SearchBar
          inputStyle={{backgroundColor: 'white'}}
          containerStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#bababa',
            borderEndColor: '#bababa',
            borderBottomColor: '#bababa',
            borderTopColor: '#bababa',
            padding: 2,
            flexDirection: 'row',
            width: '100%',
            borderRadius: 5,
          }}
          inputContainerStyle={{backgroundColor: 'white'}}
          placeholder={'Search videos ...'}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          flexGrow: 4,
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          backgroundColor: '#f6f5f6',
        }}>
        <Text>All Videos</Text>
        <Card
          containerStyle={{
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 10,

            borderColor: 'white',
            width: '80%',
            height: '30%',
          }}></Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    marginBottom: 10,
    padding: 50,
    backgroundColor: COLORS.white,
  },

  welcomeTitleSmall: {
    color: COLORS.blue,
    fontSize: 17,
    fontFamily: 'DMSans-Regular',
    // fontWeight: '700',
  },
  welcomeTitleLarge: {
    color: COLORS.blue,
    fontSize: 25,
    fontFamily: 'DMSans-Bold',
    //fontWeight: '700',
  },
});
