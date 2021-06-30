import React from 'react';
import {View, Text, Modal} from 'react-native';

const Modal = ({item, modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View>
        <Text>{item?.name}</Text>
        <Text>{item?.address}</Text>
        <Text>{item?.email}</Text>
        <Text>{item?.phone}</Text>
      </View>
    </Modal>
  );
};

export default Modal;
