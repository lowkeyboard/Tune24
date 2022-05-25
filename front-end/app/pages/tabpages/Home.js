import React, {useState, useCallback, useRef, useEffect} from 'react';
import {Icon, SearchBar, Card} from '@rneui/themed';
import {Text, View, StyleSheet, Image} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {fetchVideoID} from '../../redux/actions/idActions';
import YoutubePlayer from 'react-native-youtube-iframe';

import {images, SIZES, COLORS} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

export default function Home({navigation}) {
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

  let username = firebase.auth().currentUser.email;

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
          containerStyle={styles.searchBar}
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
        <Text style={styles.likedVideoTitle}>Top Liked Videos</Text>
        <ScrollView style={styles.scrollView}>
          <View style={{flexDirection: 'column', padding: 10}}>
            {videos.map(user => {
              return (
                <View
                  containerStyle={styles.containerStyle}
                  key={user.video_id}>
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
  containerStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,

    borderColor: 'white',
    width: '80%',
    height: '30%',
  },
  searchBar: {
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
  },
  likedVideoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginLeft: 10,
    marginTop: 3,
  },
});
