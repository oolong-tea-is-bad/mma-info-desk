import React, { useCallback } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MD2Colors as Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import Agent from './Agent'
import Home from './Home'
import Examination from './Examination'
import Mobilization from './Mobilization'
import NameList from './NameList'
import Login from './Login'
import Help from './Help'

export default function MainNavigator() {
  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()
  const goLogin = useCallback(() => navigation.navigate('Login'), [])

  function LogoTitle() {
    return (
      <View style={[styles.header]}>
        <Text style={[styles.welcomeText]}>
          병무청에 오신것을 환영합니다! 어떤 것을 도와드릴까요?
        </Text>
        <View style={[styles.viewIcon]}>
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
          title: '사회복무과',
        }}
      />
      <Stack.Screen
        name={'Examination'}
        component={Examination}
        options={{
          title: '병역판정검사과',
        }}
      />
      <Stack.Screen
        name={'Mobilization'}
        component={Mobilization}
        options={{
          title: '동원관리과',
        }}
      />
      <Stack.Screen
        name={'NameList'}
        component={NameList}
        options={{
          title: '명부 확인',
        }}
      />
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{
          title: '로그인',
        }}
      />
      <Stack.Screen
        name={'Help'}
        component={Help}
        options={{
          title: '도움말',
        }}
      />
    </Stack.Navigator>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
    header: {
      flex: 2, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
    },
    welcomeText: { fontWeight: "bold", fontSize: 25, color: Colors.white },
    viewIcon: {flexDirection: 'row'},
    icon : { color: Colors.white}
})
