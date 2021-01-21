import React, {Component, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
const GridView = ({products, index}) => {
  const [wishList, setWishlist] = useState(false);
  return (
    <TouchableOpacity
      style={[styles.gridView]}
      onPress={() => console.log('touchparent')}>
      <View style={styles.margin10}>
        <View style={styles.gridHeader}>
          <View style={styles.specialOffer}>
            <Text style={styles.specialOfferText}>{'Special Offer'}</Text>
          </View>
          <View style={styles.flexRow}>
            {products.skuTag && (
              <View style={styles.flag}>
                <Text style={styles.bestSeller}>{'Best Seller'}</Text>
              </View>
            )}

            <TouchableOpacity onPress={() => setWishlist(!wishList)}>
              <Icon
                name={wishList ? 'heart' : 'heart-outline'}
                size={22}
                color={wishList ? 'red' : 'red'}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.gridBody}>
          <Image
            resizeMode={'contain'}
            source={{uri: products.skuImageUrl}}
            style={styles.imageSty}
          />
        </View>
        <View style={styles.gridFooter}>
          <View style={{paddingHorizontal: 10}}>
            <Text numberOfLines={2} style={styles.prodName}>
              {products.skuName}
            </Text>
          </View>
          <View style={styles.cardFooterPrices}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>
                {'₹ '}
                {products.defaultPrice}
              </Text>
              <Text style={styles.priceText2}>
                {'₹ '}
                {products.defaultPrice}
              </Text>
            </View>
            <View>
              {products.skuAverageRating ? (
                <View style={styles.ratingContainer}>
                  <Icon name={'star'} size={16} color={'orange'} />
                  <Text style={{color: 'black'}}>
                    {products.skuAverageRating}{' '}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GridView;
