import {Button} from '@rneui/base';
import React, {useState, useCallback, useRef, useEffect} from 'react';
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
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Profile({navigation}) {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videoReducer.user);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    dispatch(fetchVideoID({}));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flexDirection: 'column', padding: 10}}>
          {videos.map(user => {
            return (
              <View style={{flexDirection: 'column'}} key={user.video_id}>
                <YoutubePlayer
                  height={300}
                  play={playing}
                  videoId={user.video_id}
                  onChangeState={onStateChange}
                />
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
