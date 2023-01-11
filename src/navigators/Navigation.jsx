import { View, Text, StyleSheet, Button, BackHandler, Alert, StatusBar, Platform,  } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from "../screen/Welcome/Welcome"
import Login from '../screen/login/Login'
import E_Kitoblar from '../screen/E_Kitoblar/E_Kitoblar'
import Matematika from '../screen/Matematika/Matematika'
import Mundarija_nomi from '../screen/Mundarija_nomi/Mundarija_nomi'
import TabNavigator from './TabNavigator'
import Slider from "../screen/Slider/Slider"
import StartingPage from "../screen/StartingPage/StartingPage"
import Register from '../screen/Register/Register'
import Tastiqlash from '../screen/Tasdiqlash/Tastiqlash'
import Answers from "../screen/Answers/Answers"
import Settings from "../screen/Settings/Settings"
import Profil from '../screen/Profil/Profil'
import CHangePas from '../screen/changepassword/CHangePas'
import Competition from '../screen/Musobaqa/competition'
import TestniYakunlash from '../screen/TestniTugatish/TestniYakunlash'
import BoshlashPage from '../screen/Boshlash/BoshlashPage'
import offlineTest from '../screen/offlineTest/OfflineTest'
import Natijanikorish from '../screen/Natijanikorish/Natijanikorish'
import Pdf from '../components/Pdf/Pdf'
import Fanlar from '../screen/Fanlar/Fanlar'
import QaytaNatijaKorish from '../screen/QaytaKorish/QaytaNatijaKorish'
import Variant from '../screen/Variat/Variant'



export default function navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='StartingPage' component={StartingPage} options={{ headerShown: false }} />
        <Stack.Screen name="QaytaNatijaniKorish" component={QaytaNatijaKorish} options={{ headerShown: false }} />
        <Stack.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
        <Stack.Screen name="Fanlar" component={Fanlar} options={{ headerShown: false }} />
        <Stack.Screen name="variant" component={Variant} options={{ headerShown: false }} />
        <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='Pdf' component={Pdf} options={{ headerShown: false }} />
        <Stack.Screen name='Natijanikorish' component={Natijanikorish} />
        <Stack.Screen name='offlineTest' component={offlineTest} options={{ headerShown: false }} />
        <Stack.Screen name='Boshlash' component={BoshlashPage} options={{ headerShown: false }} />
        <Stack.Screen name='Yakunlash' component={TestniYakunlash} options={{ headerShown: false }} />
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Competition' component={Competition} />
        <Stack.Screen name='Slider' component={Slider} options={{ headerShown: false }} />
        <Stack.Screen name="Sozlamalar" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="E_Kitoblar" component={E_Kitoblar} options={{ headerShown: false }} />
        <Stack.Screen name='CHangePas' component={CHangePas} options={{ headerShown: false }} />
        <Stack.Screen name="Javoblar" component={Answers} options={{ headerShown: false }} />
        <Stack.Screen name='Tastiqlash' component={Tastiqlash} options={{ headerShown: false }} />
        <Stack.Screen name='Matematika' component={Matematika} options={{ headerShown: false }} />
        <Stack.Screen name='Mundarija_nomi' component={Mundarija_nomi} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}