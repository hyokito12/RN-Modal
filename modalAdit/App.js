import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();
const myIcon = <Icon name="cross" size={30} color="#900" />;

class App extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    padding: 20,
                  }}>
                  {myIcon}
                </View>
              </TouchableOpacity>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
                Hi Babe
              </Text>
              <Image
                style={{width: 200, height: 200, borderRadius: 10, padding: 50}}
                source={{
                  uri:
                    'https://static.wixstatic.com/media/e480d8_f9c53aca36ba4d4c844daab0a5bcb3b1~mv2.png/v1/fill/w_1000,h_974,al_c,usm_0.66_1.00_0.01/e480d8_f9c53aca36ba4d4c844daab0a5bcb3b1~mv2.png',
                }}
              />
              <TouchableOpacity
                style={{
                  ...styles.openButton,
                  backgroundColor: 'white',
                  margin: 50,
                }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle2}>Hi!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Show My Babe!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    height: '80%',
    margin: 20,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 100,
    height: 20,
  },
  textStyle2: {
    color: '#2196F3',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 100,
    height: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
