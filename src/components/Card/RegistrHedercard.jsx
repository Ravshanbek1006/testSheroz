import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'

export default function RegistrHedercard(props) {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.goBack()
    }

  return (
      <View style={styles.NameStyle} >
          <Text style={styles.textNameStyle}> {props.title} </Text>
          <TouchableOpacity style={styles.backIcon} onPress={onPress} >
              <AntDesign name="arrowleft" size={30} color={'#fff'} />
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    NameStyle: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop: 10,
    },
    textNameStyle: {
        fontSize: 24,
        fontWeight: "800",
        color: "#fff"
    },
    backIcon: {
        position: "absolute",
        left: 20
    },
    ImgIconStyle: {
        width: 30,
        height: 24
    }
})