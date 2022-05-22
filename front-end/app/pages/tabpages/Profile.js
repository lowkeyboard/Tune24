import {Button} from '@rneui/base';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

import {GET_VIDEO_ID} from '../../redux/models/video/actions';

const mapStateToProps = (state, props) => {
  const {id, name, email} = state.user;

  return {id, name, email};
};

const mapDispatchToProps = dispatch => ({
  getAllUserInfo: () => {
    dispatch({
      type: GET_VIDEO_ID,
      payload: {},
    });
  },
});

const ProfileView = ({id, name, email, getAllUserInfo, navigation}) => {
  // navigation.navigate('Login')

  useEffect(() => {
    getAllUserInfo();
  }, [getAllUserInfo]);

  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

const ProfileMap = connect(mapStateToProps, mapDispatchToProps)(ProfileView);

export {ProfileMap};
