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
import {fetchVideoID} from '../../../redux/actions/idActions';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';

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
