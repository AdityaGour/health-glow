const styles = {
  mainContainer: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 46,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerLeft: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 12,
    // borderWidth: 1
  },
  headerBody: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    // borderWidth: 1
  },
  headerRight: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    flexDirection: 'row',
    // paddingRight: 18
  },
  imageStyle: {width: '100%', height: '100%', borderWidth: 1},
  padding0: {paddingBottom: 0},
  headerSubTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
    flexDirection: 'row',
  },
  textBlack: {color: 'black', fontWeight: 'bold'},
  textGray: {color: '#8a8a8a', fontWeight: 'bold'},
  headerContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 10,
  },
  firstLeftIcon: {
    // paddingHorizontal: 10,
    paddingVertical: 11,
    width: 60,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#8a8a8a',
  },
  sortButtonView: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 140,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#8a8a8a',
    // marginHorizontal: 16
  },
  filterButtonView: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 140,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#8a8a8a',
  },
  addressContainer: {
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#8a8a8a',
  },
  addressButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
  },
};
export default styles;
