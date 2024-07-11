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

export default function MainNavigator() {
  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()
  const goNameList = useCallback(() => navigation.navigate('NameList'), [])
  const goLogin = useCallback(() => navigation.navigate('Login'), [])

  function LogoTitle() {
    return (
      <View style={[styles.header]}>
        <Text style={[styles.welcomeText]}>
          병무청에 오신것을 환영합니다! 어떤 것을 도와드릴까요?
        </Text>
        <View style={[styles.viewIcon]}>
          {/* <Icon
            size={50}
            name="comment-question-outline"
            style={[styles.icon, { paddingRight: 10 }]}
            // onPress={goLogin}
          /> */}
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
          title:
            '아래 빈칸들을 작성하신 이후 1층 사회복무과로 가주시길 바랍니다.',
        }}
      />
      <Stack.Screen
        name={'Examination'}
        component={Examination}
        options={{
          title:
            '아래 빈칸들을 작성하신 이후 2층 병역판정검사과로 가주시길 바랍니다.',
        }}
      />
      <Stack.Screen
        name={'Mobilization'}
        component={Mobilization}
        options={{
          title:
            '아래 빈칸들을 작성하신 이후 1층 동원관리과로 가주시길 바랍니다.',
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
