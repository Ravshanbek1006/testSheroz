import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import StyleColor from "../../assets/styles/color"
import Card from "../../components/Card/Cards"
import Back from '../../components/Back/Back'
import GetBooks from '../../Utils/GetBooks'
import PageNameCard from '../../components/Card/PageNameCard'


export default function E_Kitoblar(props) {

    const [Kitoblar, setKitoblar] = useState(props.route.params.value)

    return (
        <View style={styles.body}>
            <PageNameCard title={props.route.params.pageTitle} />
            <Back />
            <ScrollView>
                {
                    (Kitoblar) ? Kitoblar.map((item, index) => {
                        return (
                            <Card key={index} text={item.title} icon="arrow-right" icon2="list" pageName="Pdf" PDFLink={item.download} />
                        )
                    }): <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="teal" />
                </View>
                }
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
    container: {
        flex: 1,
        justifyContent: "center",
        marginTop: Dimensions.get("window").height * 0.3
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        alignItems: "center"

    }
})