import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButtom from '../CustomButton';
import styles from './styles';

const HomeHeader = ({
  leftOnPress,
  imgSrc,
  title,
  IconName,
  rightIconPress,
  rightIconPress1,
  rightIconPress2,
  rightIconName,
  rightIconName1,
  rightIconName2,
  changeViewMode,
  sortProducts,
  filterProducts,
  totalCount,
  productTitle,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          {leftOnPress && (
            <TouchableOpacity onPress={leftOnPress}>
              <Icon name={IconName} color={'black'} size={28} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.headerBody}>
          {imgSrc && (
            <Image
              source={imgSrc}
              style={styles.imageStyle}
              resizeMode={'contain'}
            />
          )}
          {title && <Text>{title}</Text>}
        </View>
        <View style={styles.headerRight}>
          {rightIconPress && (
            <CustomButtom
              onPress={rightIconPress}
              IconName={rightIconName}
              iconColor={'#8a8a8a'}
              iconsize={22}
            />
          )}
          {rightIconPress1 && (
            <TouchableOpacity
              onPress={rightIconPress1}
              style={{paddingHorizontal: 5}}>
              <Icon name={rightIconName1} color={'#8a8a8a'} size={24} />
            </TouchableOpacity>
          )}
          {rightIconPress2 && (
            <TouchableOpacity onPress={rightIconPress2}>
              <Icon name={rightIconName2} color={'#8a8a8a'} size={24} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.padding0}>
        <View style={styles.headerSubTitle}>
          <Text style={styles.textBlack}>{`${productTitle}-`}</Text>
          <Text style={styles.textGray}>{`${totalCount} Products`}</Text>
        </View>
        <View style={styles.headerContainerView}>
          <CustomButtom
            onPress={changeViewMode}
            styles={styles.firstLeftIcon}
            IconName={'grid-outline'}
          />
          <CustomButtom
            onPress={sortProducts}
            styles={styles.sortButtonView}
            title={'Sort'}
          />
          <CustomButtom
            onPress={filterProducts}
            styles={styles.filterButtonView}
            title={'Filter'}
          />
        </View>
        <View style={styles.addressContainer}>
          <TouchableOpacity style={styles.addressButton}>
            <Icon name={'location-outline'} size={22} />
            <Text>
              {'Deliver To --'} {'8765665'}
            </Text>
            <Icon name={'chevron-down-outline'} size={22} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
