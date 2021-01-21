import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const CustomActionsheet = ({
  modalVisible,
  setModalVisible,
  productData,
  sortProducts,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={setModalVisible}
      onDismiss={setModalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.closeIconSection}>
            <Icon name="close" size={32} color="white" />
          </View>
          {productData &&
            productData?.sorts &&
            productData?.sorts.map((categ, index) => {
              return (
                <View style={styles.drawerView} key={categ.name}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => sortProducts(categ.orders)}
                    style={styles.openButton}>
                    <Text style={styles.textStyle}>{categ.text}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>
      </View>
    </Modal>
  );
};

export default CustomActionsheet;
