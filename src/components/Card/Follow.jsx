import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import StyleColor from "../../assets/styles/color"


export default function Follow(props) {
  return (
    <View style = {styles.FallowStyle} >
      <FontAwesome name={props.iconName} size={30} color = {StyleColor.GreenColor} />
    </View>
  )
}

const styles = StyleSheet.create({
    FallowStyle:{
        backgroundColor:"#F4FCF9",
        width:64,
        height:64,
        justifyContent:"center", 
        alignItems:"center",
        backgroundColor:"#57CEA430",
        borderRadius:18
    }
})