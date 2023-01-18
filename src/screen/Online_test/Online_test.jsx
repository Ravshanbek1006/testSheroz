import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, BackHandler, } from 'react-native'
import React, { useEffect } from 'react'
import StyleColor from "../../assets/styles/color"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native'
import Back from '../../components/Back/Back'

export default function Online_test() {
    
  return (
    <View style={{justifyContent:"center", flex:1, alignItems:"center"}}>
      <Text style={{fontSize:30, color:"gray", fontWeight:"600", fontFamily:"roboto"}}>Coming Soon...</Text>
    </View>
    // <View style={styles.body}>
    //   <Back/>
    //   <Text style={{ fontSize: 18, color: "black" }}>LOGO jamoasi sizni imtihonlarga qacnahlik tayyor ekanligingizni tekshirish uchun doimiy Online testlar tashkillashtirib bormoqda.s</Text>
    //   <View style={styles.card}>
    //     <Text style={styles.title}>Navbatdagi test vaqti</Text>
    //     <Text style={styles.subtitle}><FontAwesome5 name="clock" size={15} /> 05 - 02 - 2022 | 18:00 - 21:00</Text>
    //     <Text style={styles.title}>Shakli </Text>
    //     <Text style={styles.subtitle}><FontAwesome5 name="clock" size={15} /> Online</Text>
    //     <Text style={styles.title}>Narxi bo’lmaydi</Text>
    //     <Text style={styles.subtitle}><FontAwesome5 name="clock" size={15} /> 7000 so'm</Text>
    //   </View>
    //   <View style={{ alignItems: "center" }}>
    //     <Text style={{ fontSize: 25, color: "black" }}>Online test boshlanishiga</Text>
    //   </View>
    //   <View style={{flexDirection:"row", marginVertical:30}}>
    //     <View style={{ alignItems: "center" }}>
    //       <View style={styles.box}>
    //         <Text style={styles.box_title}>08</Text>
    //       </View>
    //       <Text style={styles.box_subtitle}>kun</Text>
    //     </View>
    //     <View>
    //       <Text style={{fontSize:50, color: StyleColor.GreenColor, marginHorizontal:10}}>:</Text>
    //     </View>
    //     <View style={{ alignItems: "center" }}>
    //       <View style={styles.box}>
    //         <Text style={styles.box_title}>57</Text>
    //       </View>
    //       <Text style={styles.box_subtitle}>soat</Text>
    //     </View>
    //     <View>
    //       <Text style={{fontSize:50, color: StyleColor.GreenColor, marginHorizontal:10}}>:</Text>
    //     </View>
    //     <View style={{ alignItems: "center" }}>
    //       <View style={styles.box}>
    //         <Text style={styles.box_title}>32</Text>
    //       </View>
    //       <Text style={styles.box_subtitle}>daqiqa</Text>
    //     </View>
    //     <View>
    //       <Text style={{fontSize:50, color: StyleColor.GreenColor, marginHorizontal:10}}>:</Text>
    //     </View>
    //     <View style={{ alignItems: "center" }}>
    //       <View style={styles.box}>
    //         <Text style={styles.box_title}>12</Text>
    //       </View>
    //       <Text style={styles.box_subtitle}>soniya</Text>
    //     </View>
    //   </View>
    //   <View style={{alignItems:"center"}}>
    //     <TouchableOpacity style={styles.btn}>
    //       <Text style={{color:StyleColor.backgroundColorMain, fontSize:18, fontWeight:"500"}}>Ro’yxatdan o’tish</Text>
    //     </TouchableOpacity>
    //     <Text style={{color:StyleColor.GreenColor, fontSize:18, marginVertical:10}}>Natijalarni ko’rish</Text>
    //   </View>
    // </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: StyleColor.backgroundColorMain,
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  card: {
    width: "100%",
    height: 220,
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    marginVertical: 10,
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 10,
    padding: 10,
    marginVertical: 30,
  },
  title: {
    color: "black",
    fontSize: 22,
  },
  subtitle: {
    color: StyleColor.GreenColor,
    fontWeight: "500",
    fontSize: 18
  },
  box: {
    width: 62,
    height: 65,
    backgroundColor: StyleColor.GreenColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  box_title: {
    fontSize: 30,
    color: StyleColor.backgroundColorMain
  },
  box_subtitle: {
    fontSize: 17,
    color: StyleColor.GreenColor,
    fontWeight:"500",
    marginVertical:5    
  },
  btn:{
    width:194,
    height:50,
    backgroundColor:StyleColor.GreenColor,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10
  }
})