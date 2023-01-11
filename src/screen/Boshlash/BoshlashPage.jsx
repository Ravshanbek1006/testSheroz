import { View, Text, SafeAreaView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import StyleColor from "../../assets/styles/color"
import StatusbarWhite from '../../components/StatusBar/StatusbarWhite'
import { useNavigation } from '@react-navigation/native'

export default function BoshlashPage(props) {
    const [Nomi, setNomi] = useState(props.route.params.title)
    const [time , setTime] = useState("00:00")
    const navigation = useNavigation()


    const onPress = () => {
        navigation.navigate("offlineTest", { "title": props.route.params.title, "Id": props.route.params.Id })
    }
  return (
      <SafeAreaView style={styles.ContentContainer} >
          <StatusbarWhite />
          <View style={styles.imgContainer} >
              <Image source={require("../../assets/images/boshlash.jpg")} style={styles.ImageStyles} />
             <View style = {styles.timebox} >
                  <Text style={styles.TextStyle} >
                      {time}
                  </Text>
             </View>
              <Text style={styles.dataStyle} >
                  {Nomi}
              </Text>
              <Text style={styles.text} >
                  Bilimingizni sinab ko’rish uchun Boshlash tugmasini bosing.
              </Text>
          </View>
          <View style={{ alignItems: "center" }} >
              <TouchableOpacity style={styles.BtnStyle} onPress={onPress} >
                  <Text style={styles.BtnTextStyle} >
                      Boshlash
                  </Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    ContentContainer: {
        flex: 1,
        padding: 20,
        paddingBottom: 50,
        justifyContent: 'space-between',
        backgroundColor:StyleColor.backgroundColorMain
    },
    ImageStyles: {
        width: 250,
        height: 150
    },
    imgContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get("screen").height * 2 / 3,
    },
    TextStyle: {
        fontWeight: "500",
        fontSize:38,
        color: StyleColor.textcolor,
    },
    dataStyle: {
        fontWeight: "800",
        fontSize: 20,
        color: StyleColor.textcolor,
        marginVertical: 40
    },
    text: {
        fontSize: 16,
        color: "#A2A0A8",
        width: "70%",
        textAlign: "center"
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
    },
    timebox:{
        backgroundColor:"#F4FCF9",
        justifyContent:"center",
        alignItems:"center",
        marginTop:40,
        paddingVertical:16,
        paddingHorizontal:40,
        borderRadius:16
    },

})