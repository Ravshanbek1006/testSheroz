import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import StyleColor from "../../assets/styles/color"

export default function StatusbarWhite() {
  return (
          <StatusBar backgroundColor={StyleColor.backgroundColorMain} barStyle = "dark-content"/>
  )
}

const styles = StyleSheet.create({
})