import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import StyleColor from "../../assets/styles/color"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Card from "../../components/Card/Cards"

export default function Mundarija_nomi() {

  return (
    <View style={styles.body}>
      <ScrollView>
        <Card text="Mundarija nomi" icon="window-close" />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: StyleColor.backgroundColorMain,
    padding: 20
  },
})