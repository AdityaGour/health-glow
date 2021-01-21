import React, {useState} from 'react';
import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  modalView: {
    backgroundColor: 'white',
    paddingBottom: 5,
    alignItems: 'center',
    width: deviceWidth,
    flex: 1,
  },
  openButton: {
    borderRadius: 0,
    padding: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: deviceWidth / 2.5,
    justifyContent: 'center',
  },
  openButton1: {
    borderRadius: 0,
    padding: 20,

    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '100%',
    justifyContent: 'center',
  },
  leftSide: {
    borderColor: 'red',
    alignSelf: 'flex-start',
    width: deviceWidth / 2.5,
  },
  rightView: {
    borderColor: 'red',
    width: deviceWidth - deviceWidth / 2.5,
    left: deviceWidth / 2.5,
    position: 'absolute',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  scrollStyle: {height: '100%', width: '100%'},
  drawerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
  },
  rightButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emptyView: {height: 20, marginRight: 16, width: 30},
  footerButton: {
    width: '100%',
    height: 46,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
export default styles;
