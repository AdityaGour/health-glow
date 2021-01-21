import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Header = ({
  leftOnPress,
  rightContent,
  imgSrc,
  title,
  IconName,
  rightIconPress,
  RightIconName,
}) => {
  return (
    <View style={styles.headerContainer}>
      {leftOnPress && (
        <TouchableOpacity onPress={leftOnPress} style={styles.headerLeft}>
          <Icon name={IconName} color={'black'} size={28} />
        </TouchableOpacity>
      )}

      <View style={styles.headerBody}>
        {imgSrc && (
          <Image
            source={imgSrc}
            style={styles.bodyImage}
            resizeMode={'contain'}
          />
        )}
        {title && <Text>{title}</Text>}
      </View>
      <View style={styles.headerRight}>
        {rightIconPress && (
          <TouchableOpacity onPress={leftOnPress} style={styles.headerLeft}>
            <Icon name={RightIconName} color={'black'} size={28} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
