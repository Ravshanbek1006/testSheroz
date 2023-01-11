import { View, Text, SafeAreaView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import StyleColor from "../../assets/styles/color"
import StatusbarWhite from '../../components/StatusBar/StatusbarWhite'
import { useNavigation } from '@react-navigation/native'

export default function Tastiqlash() {
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate("TabNavigator")
    }

    return (
        <SafeAreaView style = {styles.ContentContainer} >
            <StatusbarWhite/>
            <View style={styles.imgContainer} >
                <Image source={require("../../assets/images/Tastiqlash.png")} style={styles.ImageStyles} />
                <Text style={styles.TextStyle} >
                    Tasdiqlandi
                </Text>
                <Text style={styles.dataStyle} >
                    15.11.2022 / 16:00
                </Text>
                <Text style={styles.text} >
                    Imtihonga o’z vaqtida krishingizni so'raymiz
                </Text>
            </View>
            <View style={{ alignItems: "center" }} >
                <TouchableOpacity style={styles.BtnStyle} onPress={onPress} >
                    <Text style={styles.BtnTextStyle} >
                        Asosiy sahifaga qaytish
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ContentContainer:{
        flex:1,
        padding:20,
        paddingBottom:50,
        justifyContent:'space-between',
    },
    ImageStyles: {
        width: 250,
        height: 150
    },
    imgContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get("screen").height * 2 / 3,
    },
    TextStyle: {
        fontWeight: "800",
        fontSize: 24,
        color: StyleColor.textcolor,
        marginTop:78
    },
    dataStyle: {
        fontWeight: "800",
        fontSize: 20,
        color: StyleColor.textcolor,
        marginVertical:40
    },
    text: {
        fontSize: 16,
        color: "#A2A0A8",
        width: "70%",
        textAlign: "center"
    },
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