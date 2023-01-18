import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import StyleColor from "../../assets/styles/color"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native'
// import Navigation from '../../navigators/Navigation'
// import E_Kitoblar from '../../screen/E_Kitoblar/E_Kitoblar'

export default function Card(props) {
  const navigationn = useNavigation()


  const onpress = () => {
    navigationn.navigate(props.pageName, {"value": props.PDFLink, "pageTitle": props.text})
  }

  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", justifyContent:"center", alignItems:"center" }}>
          <FontAwesome5 size={20} name={props.icon2} style={{ marginHorizontal: 10, marginVertical: 2 }} />
          <Text style={{ color: "black", fontSize: 18 }}>{props.text}</Text>
        </View>
        <FontAwesome5 size={25} name={props.icon} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    padding:10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginVertical: 10,
    borderBottomWidth: 6,
    borderLeftWidth: 2,
    borderRightWidth: 4,
    borderBottomColor: "#11111115",
    borderLeftColor: "#11111110",
    borderRightColor:"#11111110",
    borderTopWidth: 2,
    borderTopColor:'#11111110'
  },
})