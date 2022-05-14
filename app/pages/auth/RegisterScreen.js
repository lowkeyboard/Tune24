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

const RegisterScreen = ({navigation}) => {
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
        navigation.replace('TabNav');
      }
    });

    return unsubscribe;
  }, []);

  // this const handles sign in protocol for the Firebase database to
  //authenticate the user properly - if you wish to utilize,
  //install Firebase and uncomment, else, remove.

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
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
          source={images.applogo}
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
        <Text style={styles.textAbove}>Email</Text>
        <View style={styles.textBoxSign}>
          <TextInput
            placeholder="Enter your email..."
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

        <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
          <Text style={styles.txtloginbtn}>Sign Up</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius * 2.5,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.gray}}>Already have an account? </Text>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.transparent,
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: COLORS.lightBlue,
              }}>
              Sign In
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
              width: 65,
              marginHorizontal: 20,
              marginBottom: -20,
              borderRadius: 10,
              backgroundColor: COLORS.white,
              elevation: 1,
              ...styles.shadow,
            }}>
            <Image
              source={images.googlelogo}
              style={{
                padding: 10,
                margin: 5,
                height: 50,
                width: 40,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              height: 65,
              width: 65,
              marginHorizontal: 20,
              marginBottom: -20,
              borderRadius: 10,
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

export default RegisterScreen;

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
  loginButton: {
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    marginTop: 40,
    marginHorizontal: 12,
    padding: 14,
  },
  txtloginbtn: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: COLORS.white,
    fontSize: 15,
    fontFamily: 'Helvetica',
  },
});
