import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import StyleColor from "../../assets/styles/color"

export default function StatusbarGreen() {
  return (
      <StatusBar backgroundColor={StyleColor.GreenColor} barStyle="default" />
  )
}