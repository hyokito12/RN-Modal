import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Cristiano Ronaldo',
    url:
      'https://en.as.com/en/imagenes/2019/09/24/football/1569310945_447431_noticia_normal.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Lionel Messi',
    url:
      'https://www.fcbarcelona.com/photo-resources/2020/02/22/dbeab760-3b9c-4a41-b205-9dd788f21314/WhatsApp-Image-2020-02-22-at-17.52.30-1-.jpeg?width=1200&height=750',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Aditya Sanjaya',
    url:
      'https://i.pinimg.com/originals/c5/11/66/c51166acf87323f15847e08c27b42a6d.jpg',
  },
];

class App extends Component {
  state = {
    modalVisible: false,
    name: '',
    linkImage: '',
  };

  setModalVisible = (visible, nama, linkGambar) => {
    this.setState({modalVisible: visible, name: nama, linkImage: linkGambar});
  };

  render() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                {this.state.name}
              </Text>
              <Image
                style={{width: 200, height: 200, borderRadius: 10, padding: 50}}
                source={{
                  uri: this.state.linkImage,
                }}
              />
              <Text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>
              <TouchableOpacity
                style={{
                  ...styles.openButton,
                  margin: 50,
                }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View>
          <Text style={styles.h2text}>TOP 3 Football Player</Text>
          <FlatList
            data={DATA}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.flatview}
                onPress={() => {
                  this.setModalVisible(true, item.title, item.url);
                }}>
                <Text style={styles.name}>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#DA291C',
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    height: '100%',
    margin: 20,
    backgroundColor: '#EAEAEA',
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
    backgroundColor: '#DA291C',
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
});

export default App;
