import {Button} from '@rneui/base';
import React, {useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {fetchVideoID} from '../../redux/actions/idActions';

export default function Profile({navigation}) {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videoReducer.user);

  useEffect(() => {
    dispatch(fetchVideoID({}));
  }, []);

  console.log(videos);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flexDirection: 'column', padding: 10}}>
          {videos.map(user => {
            return (
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.name}>
                  {user.name}
                  {'\n'}
                  <View>
                    <Text style={styles.phone}>{user.phone}</Text>
                  </View>
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    marginHorizontal: 10,
    width: '95%',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginLeft: 10,
    marginTop: 3,
  },
  arrow: {
    marginLeft: 15,
    marginTop: 6,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  phoneContainer: {
    marginLeft: 15,
    width: '100%',
  },
  phone: {
    fontSize: 14,
    fontWeight: 'normal',
    width: '92%',
    marginTop: 2,
  },
  profileImgContainer: {
    marginLeft: 4,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
