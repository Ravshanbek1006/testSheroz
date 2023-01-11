import { StyleSheet, Text, View, SafeAreaView, TextInput,ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import StyleColor from "../../assets/styles/color"
import Card from "../../components/Card/Cards"
import Back from '../../components/Back/Back'
import SetingsCard from '../../components/Card/SetingsCard'
import KirishData from '../../Utils/KirishData'
import offlineQuiz from '../../Utils/offlineQuiz'


export default function E_Kitoblar(props) {

  const [Kitoblar, setKitoblar] = useState([])

  useEffect(() => {
    Book()
  }, [])

async  function Book(params) {
    let mass = await offlineQuiz.Category()
    // mass = JSON.parse(mass)
     setKitoblar(mass[0].children[0].children)
  }
  

  return (
    <View style={styles.body}>
      <Back/>
      <ScrollView>
        {
          (Kitoblar.length > 0) && Kitoblar.map((item,index) => {
            return (
              <Card key={index} text={item.title} icon="arrow-right" icon2="list" PDFLink={item.book_downloads[0].download} />
            )
          })
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
})