import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PageNameCard(props) {
    const navigation  = useNavigation()

    const onPress = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.NameStyle} >
            <View style={styles.hederNameStyle}>
              <Text style={styles.textNameStyle}> {props.title} </Text>
            </View>
            <TouchableOpacity style={styles.backIcon} onPress = {onPress} >
                <Image source={require("../../assets/images/RightPng.png")} style = {styles.ImgIconStyle} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    NameStyle: {
        // height: 60,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginVertical:10,
    },
    textNameStyle: {
        textAlign:'center',
        fontSize: 24,
        fontWeight: "800",
        color: "#111"
    },
    backIcon: {
        position: "absolute",
        left: 0
    },
    ImgIconStyle:{
        width:35,
        height:24
    },
    hederNameStyle:{
        width:Dimensions.get("window").width - 100,
    }
})