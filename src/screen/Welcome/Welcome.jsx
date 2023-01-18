import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import StyleColor from '../../assets/styles/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BtnButton from '../../components/Button/BtnButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StatusbarGreen from '../../components/StatusBar/StatusbarGreen';

export default function Welcome() {
  const navigation = useNavigation();



  return (
    <SafeAreaView style={styles.container}>
      
      <StatusbarGreen/>
      <Text style={styles.textheder}>XUSH KELIBSIZ</Text>
      <Text style={styles.textparagrf}>
        Dasturning barcha funksiyalaridan foydalanish uchun iltimos ro’yxatdan
        o’ting.
      </Text>
      <FontAwesome5 name="user-alt" size={150} color={'#fff'} />
      <View>
        <BtnButton text="Ro’yxatdan o’tish" link="Register" />
        <Text style={{color: '#FFF', marginBottom: 20}}>
          {/* Qanday ro’yxatdan o’tkaziladi? */}
        </Text>

        <BtnButton text="Tizimga kirish" link="Login" />
        {/* <Text style={{color: '#FFF'}}> Qanday tizimga kiriladi?</Text> */}
      </View>
      <TouchableOpacity >
        <View style={styles.righttext}>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleColor.GreenColor,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textheder: {
    color: StyleColor.backgroundColorMain,
    fontSize: 30,
    marginTop: 20,
    fontWeight:"700"
  },
  textparagrf: {
    color: StyleColor.backgroundColorMain,
    textAlign: 'center',
    fontSize: 20,
  },
  righttext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textrigh: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    marginRight: 10,
  },
});