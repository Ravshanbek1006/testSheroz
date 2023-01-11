import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import StyleColor from "../../assets/styles/color"

export default function LogoTitle () {
  return (
    <View style = {styles.hederbox} >
       <Text style = {styles.textheder}>Asosiy</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    hederbox:{
        backgroundColor:StyleColor.GreenColor,
        flex:1,
        marginRight:32,
    },
    textheder:{
        color:StyleColor.backgroundColorMain,
        fontSize:18,
        fontWeight:"500",
        textAlign:"center"
    }
})