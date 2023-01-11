import { StyleSheet, Text, View, Dimensions , ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import StyleColor from "../../assets/styles/color"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native'

const homeCardarr = [
  {
    icontitle: "book",
    cardtext: "Kitoblar",
    TabScreenAdd:"E_Kitoblar"
  },
  {
    icontitle: "pencil-alt",
    cardtext: "Bilimingizni sinab ko'ring",
    TabScreenAdd: "Fanlar"
  },
  // {
  //   icontitle: "percent",
  //   cardtext: "Mening natijalarim"
  // },
  {
    icontitle: "clipboard-list",
    cardtext: "30 talik testlar",
    TabScreenAdd: "TabNavigator"
  },
  // {
  //   icontitle: "graduation-cap",
  //   cardtext: "Online testlar",
  //   TabScreenAdd: "TabNavigator"
  // },

]

export default function HomeSlider() {
  const navigation = useNavigation()
  function goScreen(TabScreenAdd) {
    navigation.navigate(TabScreenAdd)
  }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style = {styles.SlideStyle} >
    <View style = {{flexDirection:'row', marginTop:10}} >
    
        {
          homeCardarr.map((item, index) =>(
            <SwiperWrapBox key={index} item = {item} FunScreen = {(screenName) => goScreen(screenName)} /> 
          ))
        }

    </View>
    </ScrollView >
  )
}

const SwiperWrapBox = function (props) {
  
  return (
    <TouchableOpacity onPress={() => props.FunScreen(props.item.TabScreenAdd)}>
    <View style={styles.slide1}>
      <View style={styles.sliderbox} >
        <FontAwesome5 name={props.item.icontitle} size = {35} color = {StyleColor.GreenColor} />
      </View>
      <Text style={styles.sloiderText} >
        {props.item.cardtext}
      </Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  slide1:{
    width:130,
    alignItems:"center",
    marginTop:20
  },
  sloiderText: {
    color:StyleColor.textcolor,
    fontSize: 15,
    fontWeight: '600',
    marginTop:10,
    textAlign:"center",
    textAlign:"center"
  },
  sliderbox:{
    width:80,
    height:80,
    borderRadius:50,
    justifyContent:"center",
    alignItems:'center',
    borderColor: "#00000010",
    borderStyle: "solid",
    borderWidth: 2
  },
  SlideStyle:{
    borderWidth:2,
    borderColor:"#11111110",
    borderRadius:16,
    marginTop:20,
    paddingBottom:20,
    backgroundColor:"#009C9D10"
  }
})