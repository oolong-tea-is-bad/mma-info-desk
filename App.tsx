import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, Alert, Pressable } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.welcomeText]}>병무청 본관에 오신걸 환영합니다!{'\n'} 
        무엇을 도와드릴까요?
      </Text>
      <View style={[styles.view]}>
        <View style={[styles.content]}>
          <Pressable 
            style={[styles.box]} 
            onPress={() => Alert.alert("신체검사는 민원봉사실 2층을 이용해주십시오.")}
            >
            <Text style={[styles.boxText]}>신체검사</Text>
          </Pressable>
          <Pressable 
            style={[styles.box]} 
            onPress={() => Alert.alert("병역명문가 관련 서류 발급은 민원봉사실 1층을 이용해주십시오.")}
            >
            <Text style={[styles.boxText]}>병역명문가</Text>
          </Pressable>
          <Pressable 
            style={[styles.box]} 
            >
            <Text style={[styles.boxText]}>예비군</Text>
          </Pressable>
        </View>
        <View style={[styles.content]}>
          <Pressable 
            style={[styles.box]} 
            onPress={() => Alert.alert("병역명문가 관련 서류 발급은 민원봉사실을 이용해주십시오.")}
            >
            <Text style={[styles.boxText]}>사회복무요원</Text>
          </Pressable>
          <Pressable 
            style={[styles.box]} 
            onPress={() => Alert.alert("병역명문가 관련 서류 발급은 민원봉사실을 이용해주십시오.")}
            >
            <Text style={[styles.boxText]}>생계 감면</Text>
          </Pressable>
          <Pressable 
            style={[styles.box]} 
            onPress={() => Alert.alert("병역명문가 관련 서류 발급은 민원봉사실을 이용해주십시오.")}
            >
            <Text style={[styles.boxText]}>기타 업무</Text>
          </Pressable>
        </View>
        
      </View>
    </SafeAreaView>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {flex: 1, padding: 10,},
  view: {height: '100%', borderWidth: 1, flex: 2, justifyContent: 'space-evenly'},
  welcomeText: {fontWeight: "bold", fontSize: 30, textAlign: 'center', borderWidth: 1, marginTop: 10},
  content: {flexDirection: 'row', justifyContent: 'space-evenly', borderWidth: 1},
  box: {width: 300, height: 300, backgroundColor: 'orange', borderWidth: 1, justifyContent: 'center',
    alignItems: 'center', borderRadius: 4
  },
  boxText: {fontSize: 30}
})