import {Dimensions, Platform, StyleSheet} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 2,
    flex: 1,
  },

  flatViewCont: {
    flex: 1,
    marginBottom: 5,
    paddingTop: 16,
  },
  flatContainer: {
    paddingBottom: 120,
    width: deviceWidth,
  },

  fullFill: {
    ...StyleSheet.absoluteFillObject,
  },
  emptySection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  emptyText: {
    fontSize: 24,
  },
  emptySectionImage: {
    width: 150,
    height: 150,
  },

  errorText: {
    fontSize: 18,
    color: 'red',
    paddingHorizontal: 16,
  },
  LoaderContainer: {
    width: deviceWidth,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    height: deviceHeight,
  },

  cardViewIcons: {
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  cardView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    position: 'relative',
  },

  socialButtons: {
    color: 'blue',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9fdfcd',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    marginHorizontal: 36,
  },

  listItemView: {
    margin: 10,
    borderColor: 'white',
    borderWidth: 2,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 3,
  },

  loginButton: {
    alignSelf: 'flex-end',
    width: deviceWidth - 32,
    borderRadius: 5,
    height: 44,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#000428',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 1,
  },

  rectangleView: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 200,
    borderTopWidth: 400,
    borderRightColor: 'transparent',
    borderTopColor: '#9fdfcd',
    transform: [{rotate: '270deg'}],
    position: 'absolute',
    bottom: -120,
    left: 120,
  },

  inputStyle: {
    color: '#FFF',
    paddingBottom: 0,
    paddingTop: 0,
    fontSize: 22,
  },

  rightView: {
    flex: 1.8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    paddingTop: 32,
    // margin: 10,
  },

  HeaderStyle: {
    backgroundColor: '#00995c',
  },

  viewStyle: {
    marginTop: 30,
    flex: 1,
  },

  buttonUp: {
    width: 45,
    height: 45,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 999,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconStyleView: {fontSize: 26, color: 'white'},
  lognButtonText: {
    color: '#000428',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '500',
    letterSpacing: 1,
  },

  buttonForward: {
    width: 45,
    height: 45,
    position: 'absolute',
    bottom: 0,
    right: 2,

    borderRadius: 25,
    backgroundColor: '#aed581',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },

  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e6e6ff',
    borderRadius: 15,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    color: 'black',
  },
  appName: {
    textAlign: 'center',
    // paddingTop: 8,
    fontSize: 22,
    color: '#FFF',
  },
  loginButtonIcon: {marginRight: 10, fontSize: 22, color: '#000428'},
  loginSignupText: {
    // justifyContent: 'center', alignItems: 'flex-end',
    // marginTop: Platform.OS == 'android' ? 8 : 0,
    // marginRight: 16
  },
  loginSignupAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'android' ? 8 : 13,
    //  marginRight: 16
  },
  signUpText: {
    color: '#f57b02',
    fontSize: Platform.OS == 'android' ? 12 : 14,
    fontWeight: 'bold',
  },
  or_Login: {
    textAlign: 'center',
    paddingTop: 16,
    fontSize: 16,
    color: '#FFF',
  },
  loginButtonIcons: {
    fontSize: 38,
    // transform: [
    //     { rotate: '-23deg' }
    // ],
  },
  mailIcon: {
    color: '#00995c',
    marginLeft: 15,
  },
  // inputStyle: {
  //     marginLeft: 10,
  //     flex: 1
  // },
  buttonStyle: {
    marginTop: 20,
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    backgroundColor: '#00995c',
  },
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
  backgroundImage: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
  },
  ToastText: {},
});
export default styles;
