import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text style={{textAlignVertical: 'center', textAlign: 'center'}}>
        Go to register from LoginScreen
      </Text> */}
      <Button
        title="Go to register from LoginScreen"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}
