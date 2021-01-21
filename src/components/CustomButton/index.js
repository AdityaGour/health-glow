import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const CustomButtom = ({
  onPress,
  styles,
  IconName,
  title,
  iconColor,
  iconsize,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      {IconName ? (
        <Icon name={IconName} color={iconColor} size={iconsize} />
      ) : null}
      {title ? <Text>{title}</Text> : null}
    </TouchableOpacity>
  );
};

export default CustomButtom;
