import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import GreenButton from '../../components/Button/GreenButton'
import StyleColor from '../../assets/styles/color';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import StatusbarWhite from '../../components/StatusBar/StatusbarWhite';

export default function Answers() {
    return (
        <SafeAreaView style={styles.Container} >
            <StatusbarWhite/>
            <View style={styles.xStyle} >
                <Text style={{ color: "#000" }} >X</Text>
            </View>
            <View style={styles.TestHederName} >
                <MaterialCommunityIcons
                    name='file-document-outline' size={30}
                    color={StyleColor.textcolor}
                    style ={{paddingHorizontal:10}} />
                <Text style={styles.TestHederNameText} >
                    Musboqa #A1
                </Text>
            </View>
            <View style={styles.SavolBox} >
                <Image
                    source={require("../../assets/images/image24.png")}
                    width={"100%"}
                    height={393}
                    resizeMode={"cover"} />
            </View>
            <GreenButton title="Jovoblarni belgilash" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 20,
        backgroundColor:StyleColor.backgroundColorMain
    },
    xStyle: {
        width: 30,
        height: 30,
        borderColor: "#200E32",
        borderWidth: 2,
        borderStyle: "solid",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 8,
        marginVertical: 20
    },
    SavolBox: {
        marginTop: 20,
        marginBottom: 50
    },
    TestHederName: {
        borderColor: "#00000010",
        borderStyle: "solid",
        borderBottomWidth: 5,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderRadius: 20,
        height: 59,
        alignItems: "center",
        flexDirection: "row",
        borderBottomColor:"#00000015"
    },
    TestHederNameText: {
        fontWeight: "500",
        fontSize: 25,
        color: StyleColor.textcolor
    }
})