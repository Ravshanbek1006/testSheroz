import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import StyleColor from '../../assets/styles/color';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StatusbarGreen from '../../components/StatusBar/StatusbarGreen';

export default function StartingPage() {
  const [Token, setToken] = useState(false);
  const [api, setApi] = useState('');
  const [api1, setApi1] = useState('');
  const navigation = useNavigation();
  // AsyncStorage.removeItem('oka');
  AsyncStorage.getItem('oka').then(val => {
    setApi(val);
  });
  
  AsyncStorage.getItem('one').then(val => {
    setApi1(val);
  });
  if (Token) {
    console.log(api, 'slaom');
    if (api || api1 == '123') {
      navigation.navigate('TabNavigator');
      console.log(1);
    } else {
      navigation.navigate('Slider');
      console.log(2);
    }
  }

  setTimeout(() => setToken(true), 3000);

  return (
    <SafeAreaView style={styles.body}>
      <StatusbarGreen/>
      <View
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 20,
          marginBottom: 50,
        }}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <Text style={styles.SubTitle}>Oliy o’quv yurtiga tayyorlanish</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: StyleColor.GreenColor,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: StyleColor.backgroundColorMain,
    fontSize: 42,
    fontWeight: '400',
  },
  SubTitle: {
    color: StyleColor.backgroundColorMain,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});