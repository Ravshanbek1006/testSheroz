import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import StyleColor from "../../assets/styles/color"
import { useNavigation } from '@react-navigation/native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export default function HomeCard(props) {
    const navigation = useNavigation();


    const onPress = () => {
        if (props.index == 0) {
            navigation.navigate("E_Kitoblar")
        }
        if (props.index == 4) {
            navigation.navigate("Online_test")
        }
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <FontAwesome5 name={props.item.icontitle} size={60} color={"#Fff"} />
                <Text style={styles.cardtext} >
                    {props.item.cardtext}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 167,
        height: 200,
        backgroundColor: StyleColor.GreenColor,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        margin: 10,
        borderRadius: 8
    },
    cardtext: {
        color: StyleColor.backgroundColorMain,
        fontSize: 18,
        textAlign: "center",
        marginTop: 8
    }
})