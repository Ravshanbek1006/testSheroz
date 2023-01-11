import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import StyleColor from "../../assets/styles/color"

export default function GreenButton(props) {
    return (
        <View style = {{alignItems:"center"}} >
            <TouchableOpacity style={styles.BtnStyle} >
                <Text style={styles.BtnTextStyle} >
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})