import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { CheckBox } from 'react-native-elements';

const CustomCheckbox = ({ isChecked, onToggle, rightText, imageUri }) => {
    const [modalVisible, setModalVisible] = useState(false);
  
    return (
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={isChecked}
          onPress={onToggle}
          containerStyle={styles.checkbox}
        />
        
        {/* Asegúrate de que el texto esté dentro de un <Text> */}
        <TouchableOpacity onLongPress={() => setModalVisible(true)}>
          <Text style={styles.label}>{rightText}</Text>
        </TouchableOpacity>
  
        {/* Modal para mostrar la imagen */}
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          animationType="fade"
        >
          <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
            <View style={styles.modalContent}>
              <Image
                source={imageUri}
                style={styles.modalImage}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  };

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  checkbox: {
    flex: 1,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Oscurece el fondo
  },
  modalContent: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default CustomCheckbox;
