import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.textWelcome]}>병무청 본관에 오신걸 환영합니다!{'\n'} 
        무엇을 도와드릴까요?
      </Text>
      <View style={[styles.view]}>
        <View style={[]}>
          <View style={[styles.box]}></View>
          <View style={[styles.box]}></View>
          <View style={[styles.box]}></View>
        </View>
        <View>
          <View style={[styles.box]}></View>
          <View style={[styles.box]}></View>
          <View style={[styles.box]}></View>
        </View>
        
      </View>
    </SafeAreaView>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {flex: 1, padding: 10,},
  view: {height: '100%', borderWidth: 1, },
  textWelcome: {fontWeight: "bold", fontSize: 30, textAlign: 'center', borderWidth: 1, marginTop: 10},
  box: {width: 300, height: 80, backgroundColor: 'orange', borderWidth: 1},
})