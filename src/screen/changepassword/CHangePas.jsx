import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import StyleColor from '../../assets/styles/color';
import StatusbarWhite from '../../components/StatusBar/StatusbarWhite';
import PageNameCard from '../../components/Card/PageNameCard';
import Back from '../../components/Back/Back';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PassChange from '../../Utils/PassChange';
import {Modal} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const CHangePas = () => {
  const [show, setShow] = useState(true);
  const [NewShow, setNewShow] = useState(true);
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [newPass1, setNewPass1] = useState('');
  let Token = ''
  let EskiParol = ''
  const [Number, setNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigator = useNavigation()
    
     AsyncStorage.getItem('Phone').then(val => {
      setNumber(val);
    });

   AsyncStorage.getItem('token').then(val => {
    Token = JSON.parse(val)
  });

  const savePass = async() => {
  
  let newResult = await PassChange.PasswordChange({
    old_pass: oldPass,
    new_pass: newPass,
    new_pass1: newPass1,
    token: Token,
    phone: Number,
  });
  console.log(newResult);

  if (newResult.success == true) {
    AsyncStorage.setItem("Parol", newPass)
    navigator.navigate("Login")
  }else{
    Alert.alert("Kiritilgan ma'lumotlar to'gri emas qayatadan urinib koring")
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <Back />
      <StatusbarWhite />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={require('../../assets/images/Tayyor.png')} />
            <Text style={styles.modalText}>Saqlandi</Text>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('TabNavigator')}
                  style={styles.buttonClose2}>
                  <Text style={styles.textStyle1}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Back />
      <PageNameCard title="Parolni o'zgartirish" />
      <View>
        <Text style={styles.WordText}>
          Katta va kichik harflar bilan kamida 8 ta belgi yozilsin
        </Text>
      </View>
      <View>
        <View style={styles.InpBox}>
          <Entypo
            name="lock"
            style={styles.Icon1}
            size={20}
            color={'#a2a0a8'}
          />
          <TextInput
            placeholder={'Oldingi Parolni Kiriting'}
            placeholderTextColor={'#a2a0a8'}
            secureTextEntry={show}
            style={styles.Input}
            onChangeText={e => setOldPass(e)}
          />
          <TouchableOpacity
            style={styles.Icon2}
            onPress={() => {
              setShow(prev => !prev);
            }}>
            {show ? (
              <Entypo name="eye-with-line" size={20} color={'#a2a0a8'} />
            ) : (
              <Entypo name="eye" size={20} color={'#a2a0a8'} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.InpBox}>
          <Entypo
            name="lock"
            style={styles.Icon1}
            size={20}
            color={'#a2a0a8'}
          />
          <TextInput
            placeholder={'Yangi Parol Yarting'}
            placeholderTextColor={'#a2a0a8'}
            secureTextEntry={show}
            style={styles.Input}
            onChangeText={e => setNewPass(e)}
          />
          <TouchableOpacity
            style={styles.Icon2}
            onPress={() => {
              setShow(prev => !prev);
            }}>
            {show ? (
              <Entypo name="eye-with-line" size={20} color={'#a2a0a8'} />
            ) : (
              <Entypo name="eye" size={20} color={'#a2a0a8'} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.InpBox}>
          <Entypo
            name="lock"
            style={styles.Icon1}
            size={20}
            color={'#a2a0a8'}
          />
          <TextInput
            placeholder={'Parolni takrorlang'}
            placeholderTextColor={'#a2a0a8'}
            secureTextEntry={NewShow}
            style={styles.Input}
            onChangeText={e => setNewPass1(e)}
          />
          <TouchableOpacity
            style={styles.Icon2}
            onPress={() => {
              setNewShow(prev => !prev);
            }}>
            {NewShow ? (
              <Entypo name="eye-with-line" size={20} color={'#a2a0a8'} />
            ) : (
              <Entypo name="eye" size={20} color={'#a2a0a8'} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.InpBox}>
          <TouchableOpacity style={styles.btn} onPress={savePass}>
            <Text style={styles.btnText}>O'zgarishni Saqalash</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  Textt: {
    color: '#000',
    fontSize: 24,
    fontWeight: '800',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  WordText: {
    color: '#a2a0a8',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'left',
    fontWeight: '500',
    textAlign: 'center',
  },
  InpBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    position: 'relative',
  },
  Input: {
    height: 53,
    width: 310,
    borderRadius: 25,
    color: '#000',
    fontSize: 20,
    paddingLeft: 40,
    backgroundColor: '#f9f9fa',
  },
  Icon1: {
    position: 'absolute',
    left: 35,
    zIndex: 1,
  },
  Icon2: {
    position: 'absolute',
    right: 45,
    zIndex: 1,
    // top: 0,
  },
  btn: {
    width: 310,
    height: 55,
    backgroundColor: '#42C999',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
  },
});

export default CHangePas;
