const styles = {
  headerContainer: {
    height: 46,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'center',
  },
  headerLeft: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 12,
  },
  headerBody: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
  },
  headerRight: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 18,
  },
  bodyImage: {width: '100%', height: '100%', borderWidth: 1},
};
export default styles;
