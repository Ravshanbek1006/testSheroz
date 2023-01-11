import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native'

export default function SetingsCard(props) {
    const [statusnavigate, setStatusnavigate] = useState("")
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => props.screenFun(props.data.screenName)} >
            <View style={styles.CardSetingContiner} >
                <Text style={styles.TextSetingsCard} >{props.data.title}</Text>
                <FontAwesome5 name='angle-right' size={25} color={"#15141F"} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    CardSetingContiner: {
        height: 58,
        justifyContent: "space-between",
        flexDirection: "row",
        borderTopColor: "#11111105",
        borderTopWidth: 2,
        borderTopStyle: "solid",
        alignItems: "center",
    },
    TextSetingsCard: {
        fontSize: 16,
        fontWeight: "700",
        color: "#15141F"
    }
})