import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

// import auth from '@react-native-firebase/auth';
import {images, SIZES, COLORS} from '../../constants';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
  });

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  // this is an auth state change for utilizing a database, specifically Firebase,
  //that pushes the user's primary screen to Home after logging in
  //(remove if you do not plan on implementing Firebase).

  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Home');
      }
    });

    return unsubscribe;
  }, []);

  // this const handles sign in protocol for the Firebase database to
  //authenticate the user properly - if you wish to utilize,
  //install Firebase and uncomment, else, remove.

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('User signed in with', user.email);
        navigation.replace('TabNav');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setEmailError(true);
          console.log('That email address is invalid!');
        }

        if (error.code === 'auth/wrong-password') {
          console.log('That email address is invalid!');
          setPasswordError(true);
        }

        console.error(error);
      });
    setEmailError(false);
    setPasswordError(false);
  };

  // replaces password text with * on active
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{
            height: 250,
            width: 500,
          }}
        />
      </View>
      <View
        style={{
          flex: 3,
          paddingHorizontal: 20,
          paddingVertical: 30,
          marginBottom: -10,
        }}>
        <Text style={styles.textAbove}>Email or Phone Number</Text>
        <View style={styles.textBoxSign}>
          <TextInput
            placeholder="Enter your email or phone number..."
            onChangeText={value => setEmail(value)}
            autoCapitalize={'none'}
            style={{
              flex: 1,
              height: 40.5,
              fontSize: 15,
              marginLeft: 2,
            }}
          />
        </View>

        <Text style={{fontSize: 14, marginLeft: 12, marginTop: 30}}>
          Password
        </Text>
        <View style={styles.textBoxSign}>
          <TextInput
            placeholder="Enter your password..."
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={value => setPassword(value)}
            style={{
              flex: 1,
              height: 40.5,
              fontSize: 15,
              marginLeft: 5,
            }}
          />
        </View>

        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.darkgray,
              marginBottom: -15,
              top: 8,
              alignSelf: 'flex-end',
              right: 25,
            }}>
            Reset Password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            height: 55,
            marginHorizontal: 30,
            marginTop: 40,
            marginBottom: -20,
            paddingHorizontal: SIZES.radius,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            ...styles.shadow,
          }}
          onPress={handleSignIn}>
          <View>
            <Text
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                top: 10,
                color: COLORS.white,
                fontSize: 25,
              }}>
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius * 2.5,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.gray}}>Don't have an account? </Text>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.transparent,
            }}
            onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 19,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            justifyContent: 'center',
            marginBottom: 5,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              height: 65,
              width: 120,
              marginHorizontal: 20,
              marginBottom: -20,
              borderRadius: 50,
              backgroundColor: COLORS.white,
              elevation: 1,
              ...styles.shadow,
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              height: 65,
              width: 120,
              marginHorizontal: 20,
              marginBottom: -20,
              borderRadius: 50,
              backgroundColor: '#4267B2',
              elevation: 1,
              ...styles.shadow,
            }}>
            <Text
              style={{
                color: COLORS.white,
                alignSelf: 'center',
                fontSize: 40,
                fontWeight: 'bold',
              }}>
              f
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000', // for iphone drop shadow (specifies the android equivalent, elevation: 1)
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  textBoxSign: {
    flexDirection: 'row',
    height: 45,
    marginHorizontal: 5,
    marginTop: 5,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray,
    elevation: 2,
  },
  textAbove: {fontSize: 14, marginLeft: 12},
});
