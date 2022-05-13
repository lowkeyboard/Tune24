import React from 'react';
import {Button, Text, View} from 'react-native';

export default function RegisterScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Login from RegisterScreen"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
