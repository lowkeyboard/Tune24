import React, {useEffect} from 'react';

import {Button, View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Home({navigation}) {
  function FirebaseLogOut() {
    auth().signOut().then(navigation.navigate('Login'));
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Signing out." onPress={FirebaseLogOut} />
    </View>
  );
}
