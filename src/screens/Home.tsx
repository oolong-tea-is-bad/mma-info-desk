import React, { useCallback } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, Alert, Pressable } from "react-native";
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import { MD2Colors as Colors } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
    const navigation = useNavigation()
    const goAgent = useCallback(() => navigation.navigate('Agent'), [])
    const goExamination = useCallback(() => navigation.navigate('Examination'), [])
    const goMobilization = useCallback(() => navigation.navigate('Mobilization'), [])
    const goNameList = useCallback(() => navigation.navigate('NameList'), [])

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
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
                onPress={goMobilization}
                >
                <Text style={[styles.boxText]}>예비군</Text>
            </Pressable>
            </View>
            <View style={[styles.content]}>
            <Pressable 
                style={[styles.box]} 
                onPress={goAgent}
                >
                <Text style={[styles.boxText]}>사회복무요원</Text>
            </Pressable>

            <Pressable 
                style={[styles.box]} 
                onPress={goExamination}
                >
                <Text style={[styles.boxText]}>생계 감면</Text>
            </Pressable>

            <Pressable 
                style={[styles.box]} 
                onPress={() => Alert.alert(
                    "기타 업무 상황들은 아래 연락처로 연락 부탁드리겠습니다: \n 010-xxxx-xxxx | 010-xxxx-xxxx"
                )}
                >
                <Text style={[styles.boxText]}>기타 업무</Text>
            </Pressable>

            <Pressable 
                style={[styles.box]} 
                onPress={goNameList}
                >
                <Text style={[styles.boxText]}>명부 확인</Text>
            </Pressable>
            </View>
            
        </View>
    </SafeAreaView>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  view: {height: '100%', flex: 2, justifyContent: 'space-evenly'},
  welcomeText: {fontWeight: "bold", fontSize: 30, textAlign: 'center', marginTop: 10},
  content: {flexDirection: 'row', justifyContent: 'space-evenly'},
  box: {width: 300, height: 300, backgroundColor: Colors.blueGrey500, justifyContent: 'center',
    alignItems: 'center', borderRadius: 4
  },
  boxText: {fontSize: 30, color: Colors.white},
  fetch: {borderWidth: 1}
})