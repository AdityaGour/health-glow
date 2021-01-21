import {Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = {
  gridView: {
    width: deviceWidth,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    height: deviceHeight / 2.8,
    backgroundColor: '#ffffff',
  },
  gridFooter: {
    // paddingTop: 10
  },
  gridHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  flag: {
    width: 25,
    height: 25,
    backgroundColor: 'orange',
    justifyContent: 'center',
    marginRight: 8,
  },
  flagTop: {
    width: 110,
    height: 56,
    backgroundColor: 'red',
  },
  flagBottom: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 0,
    height: 0,
    borderBottomWidth: 13,
    borderBottomColor: 'transparent',
    borderLeftWidth: 55,
    borderLeftColor: 'red',
    borderRightWidth: 55,
    borderRightColor: 'red',
  },
  margin10: {margin: 10},
  specialOffer: {
    height: 20,
    backgroundColor: 'red',
    paddingHorizontal: 10,
    borderRadius: 2,
    elevation: 2,
  },
  specialOfferText: {fontSize: 14, fontWeight: 'bold', color: '#fff'},
  flexRow: {flexDirection: 'row'},
  bestSeller: {
    fontSize: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  imageSty: {width: '100%', height: '60%'},
  prodName: {fontSize: 12, fontWeight: 'bold', color: 'black'},
  cardFooterPrices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
    paddingHorizontal: 10,
  },
  priceText2: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  ratingContainer: {
    flexDirection: 'row',
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default styles;
