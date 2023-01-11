import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import StyleColor from "../../assets/styles/color"
import { useNavigation } from '@react-navigation/native'

export default function BtnButton(props) {
  const navigation = useNavigation();

  const  onPress = () => {
    if (props.link) {
      navigation.navigate(props.link)
    }
}
return (
    <TouchableOpacity style={styles.btn} onPress={onPress} >
      <Text style={styles.btntext} >{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 80,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderRadius: 9,
  },
  btntext: {
    fontSize: 18,
    fontWeight: "500",
    color: StyleColor.GreenColor,
    textAlign: "center"
  },
})