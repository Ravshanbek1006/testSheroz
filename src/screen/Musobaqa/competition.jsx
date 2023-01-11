import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity, TextInput, Modal, Pressable  } from 'react-native';
import StyleColor from "../../assets/styles/color"
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import StatusbarGreen from '../../components/StatusBar/StatusbarGreen';
import { useNavigation } from '@react-navigation/native';
import Competitionn from '../../Utils/CompitetionData'
import Back from '../../components/Back/Back';
const Competition = (props) => {


  const [Time, setTime] = useState(0);
  const [peoples, setPeoples] = useState([]);
  const [name, setName] = useState('');


  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate("Tastiqlash")
  }

  useEffect(() => {
    const List = async() => {
      const participants = await Competitionn.Competitionparticipants()
      const list = await Competitionn.Musobaqalar()
      const id = Number(props.route.params.value) 

        list.map(item => {
          if (item.id  == id) {
            setName(item.title)
          }
        })

      setPeoples(participants)
    }

    List()
  }, [])
  

  const Plus = () => {
    let son = Time
    son = son + 5
    setTime(son)
  }
  const Minus = () => {
    let son = Time
    if (son > 0) {
      son -= 5
      setTime(son)
    }
  }
  const AddCompitetion = async() => {
    let AddPeople = await Competitionn.CompetitionRegister({
      competition: 1,
      user: 1,
      username: "piuytr",
    });

    let API = JSON.parse(AddPeople)
    console.log(API);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: StyleColor.GreenColor, paddingTop:30,  }}>
      <Back/>
      <StatusbarGreen/>
      <ScrollView style = {{backgroundColor:"yellow", padding:20}} >
      <View style = {{height:"100%", justifyContent:"space-between",backgroundColor:"teal",padding:10}} >
          <View style ={{backgroundColor:"green"}} >
            <Text style={{ textAlign: "center", color: StyleColor.backgroundColorMain, fontSize: 25, fontWeight: "600" }}>Musobaqa #A1</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.card_title}>{name}</Text>

            <View style={styles.pay}>
              <FontAwesome5Icon size={30} name="wallet" color={StyleColor.GreenColor} />
              <Text style={{ marginHorizontal: 10, fontSize: 17 }}>Tekin</Text>

            </View>



            <View style={styles.card_body}>
              <View style={{ flexDirection: "row", display: 'flex', justifyContent: "space-between", }}>
                <Text style={{ fontSize: 19, fontWeight: "600", color: "black" }}>Ro’yxatdan o’tganlar</Text>
                <Text style={{ fontSize: 19, color: StyleColor.GreenColor }}>Barchasi</Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={AddCompitetion}>
                  <View style={{ marginVertical: 20, marginEnd: 15 }}>
                    <View style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: "#F5F7FE", lexDirection: "row", display: 'flex', justifyContent: "center", alignItems: "center", }}><FontAwesome5Icon name='user-plus' size={20} color="#4263EB" /></View>
                    <Text style={{ fontSize: 17, color: "black", fontWeight: "400", marginTop: 5 }}>Qo'shilish</Text>
                  </View>
                </TouchableOpacity>
                {
                  (peoples.length > 0) && peoples.map((item, index) => (
                    <View key={index} style={{ marginVertical: 20, marginEnd: 15, width: 70, alignItems: "center", }}>
                      <View style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: "#F5F7FE", lexDirection: "row", display: 'flex', justifyContent: "center", alignItems: "center", }}><FontAwesome5Icon name='user' size={20} color="#4263EB" /></View>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Text style={{ fontSize: 14, color: "black", fontWeight: "400", marginTop: 5, textAlign: "center", }}>{item.username}</Text>
                      </ScrollView>
                    </View>
                  ))
                }
              </ScrollView>
            </View>

            <View style={styles.time_card}>
              <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}>Musobaqaga</Text>
              <View style={{ flexDirection: 'row', display: "flex", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={Minus}>
                  <Text style={{ fontSize: 50, fontWeight: "bold", paddingVertical: 10, paddingHorizontal: 20 }}>-</Text>
                </TouchableOpacity>
                <TextInput keyboardType='phone-pad' onChangeText={(e) => setTime(Number(e))} style={{ fontSize: 60, fontWeight: "bold", color: "black" }}>{Time}</TextInput>
                <TouchableOpacity onPress={Plus}>
                  <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 12, paddingVertical: 10, paddingHorizontal: 20 }}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}>Daqiqa qolganda</Text>
            </View>
            <View style={styles.btn}>
              <View style={{ alignItems: "center" }} >
                <TouchableOpacity style={styles.BtnStyle} onPress={onPress} >
                  <Text style={styles.BtnTextStyle} >
                    Ogohlantirish
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: "100%",
    backgroundColor: "red",
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom:0
  },
  card_title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
    marginTop: 10,
    marginBottom:20,
    color: "black"
  },
  pay: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderColor:"#11111110",
    borderRadius: 5,
    paddingHorizontal: 10,
    borderRadius:16
  },
  card_body: {
    width: "100%",
    marginVertical: 40,
  },
  time_card: {
    width: "100%",
    backgroundColor: "#F4FCF9",
    padding: 20,
    borderRadius: 10
  },
  time: {
    fontSize: 30,
    fontWeight: "bold",
  },
  btn: {
    marginTop: 20,
  },
  BtnStyle: {
    backgroundColor: StyleColor.GreenColor,
    width: "80%",
    height: 50,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  BtnTextStyle: {
    color: StyleColor.backgroundColorMain,
    fontSize: 16,
    fontWeight: "700"
  }
})

export default Competition;