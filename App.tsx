import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MD2Colors as Colors } from "react-native-paper";

import Agent from "./src/screens/Agent";
import Home from "./src/screens/Home";
import Examination from "./src/screens/Examination";
import Mobilization from "./src/screens/Mobilization";
import NameList from "./src/screens/NameList";
import DrawerContent from "./src/screens/DrawerContent";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.safeAreaView]}>
        <Stack.Navigator>
          <Stack.Screen
            name={"Home"}
            component={Home}
            options={{
              title: '병무청에 오신것을 환영합니다! 어떤 것을 도와드릴까요?',
              headerStyle: {
                backgroundColor: Colors.blue700,
              },
              headerTintColor: Colors.white,
              headerShadowVisible: false,
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }} />
          <Stack.Screen
            name={"Agent"}
            component={Agent}
            options={{
              title: "아래 빈칸들을 작성하신 이후 1층 사회복무과로 가주시길 바랍니다."
            }}
          />
          <Stack.Screen
            name={"Examination"}
            component={Examination}
            options={{
              title: "아래 빈칸들을 작성하신 이후 2층 병역판정검사과로 가주시길 바랍니다."
            }}
          />
          <Stack.Screen
            name={"Mobilization"}
            component={Mobilization}
            options={{
              title: "아래 빈칸들을 작성하신 이후 1층 동원관리과로 가주시길 바랍니다."
            }}
          />
          <Stack.Screen
            name={"NameList"}
            component={NameList}
            options={{
              title: "명부 확인"
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: { flex: 1, },
  view: { height: '100%', borderWidth: 1, flex: 2, justifyContent: 'space-evenly' },
  welcomeText: { fontWeight: "bold", fontSize: 30, textAlign: 'center', borderWidth: 1, marginTop: 10 },
  content: { flexDirection: 'row', justifyContent: 'space-evenly', borderWidth: 1 },
  box: {
    width: 300, height: 300, backgroundColor: 'orange', borderWidth: 1, justifyContent: 'center',
    alignItems: 'center', borderRadius: 4
  },
  boxText: { fontSize: 30 }
})