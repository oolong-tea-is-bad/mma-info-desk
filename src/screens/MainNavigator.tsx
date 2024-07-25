import React, { useCallback, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MD2Colors as Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import Agent from './Agent'
import Home from './Home'
import Examination from './Examination'
import Mobilization from './Mobilization'
import Service from './Service'
import Management from './Management'
import NameList from './NameList'
import Login from './Login'
import Help from './Help'

import strings from '../assets/translation/localization'
import { useToggleLang } from '../contexts'

export default function MainNavigator() {
  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()
  const goLogin = useCallback(() => navigation.navigate('Login'), [])

  const toggleLang = useToggleLang()

  function LogoTitle() {
    return (
      <View style={[styles.header]}>
        <Text style={[styles.welcomeText]}>{strings.홈_헤더}</Text>
        <View style={[styles.viewIcon]}>
          <Text style={[styles.transText]} onPress={toggleLang}>
            {strings.언어변경}
          </Text>
          <Icon
            size={50}
            name="format-list-bulleted"
            style={[styles.icon, { paddingRight: 20 }]}
            onPress={goLogin}
          />
        </View>
      </View>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{
          headerTitle: (props: any) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: Colors.blue700,
          },
          headerTintColor: Colors.white,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name={'Agent'}
        component={Agent}
        options={{
          title: strings.사회복무과,
        }}
      />
      <Stack.Screen
        name={'Examination'}
        component={Examination}
        options={{
          title: strings.병역판정검사과,
        }}
      />
      <Stack.Screen
        name={'Mobilization'}
        component={Mobilization}
        options={{
          title: strings.동원관리과,
        }}
      />
      <Stack.Screen
        name={'Management'}
        component={Management}
        options={{
          title: strings.운영지원과,
        }}
      />
      <Stack.Screen
        name={'Service'}
        component={Service}
        options={{
          title: strings.복무관리과,
        }}
      />
      <Stack.Screen
        name={'NameList'}
        component={NameList}
        options={{
          title: strings.명부확인,
        }}
      />
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{
          title: strings.로그인,
        }}
      />
      <Stack.Screen
        name={'Help'}
        component={Help}
        options={{
          title: strings.기타업무,
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeText: { fontWeight: 'bold', fontSize: 25, color: Colors.white },
  viewIcon: { flexDirection: 'row', alignItems: 'center' },
  icon: { color: Colors.white },
  transText: {
    paddingRight: 20,
    fontWeight: 'semibold',
    fontSize: 35,
    color: Colors.white,
  },
})
