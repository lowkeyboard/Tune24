import {StyleSheet} from 'react-native';
import {images, SIZES, COLORS} from '../../../constants';

export default StyleSheet.create({
  welcomeView: {
    flex: 1,
    marginBottom: 10,
    padding: 50,
    backgroundColor: COLORS.white,
  },
  welcomeArea: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
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
  likedVideoArea: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 4,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: '#f6f5f6',
  },
  likedVideoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginLeft: 10,
    marginTop: 3,
  },
});
