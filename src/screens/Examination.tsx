import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
  Image,
} from 'react-native'
import { useState } from 'react'
import { MD2Colors as Colors } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import 'moment/locale/ko'

export default function Examination() {
  const setData = async (
    key: string,
    value: { name: string; place: string; etc: string; department: string }
  ) => {
    try {
      await AsyncStorage.setItem(
        key,
        JSON.stringify([value.name, value.place, value.etc, value.department])
      )

      console.log(`setItem... ${key} : ${value}`)
    } catch (e) {
      throw e
    }
  }

  const [user, setUser] = useState({
    name: '',
    place: '',
    etc: '',
    department: '병역판정검사과',
  })

  var currTime = moment().format('일자: YYYY-MM-DD | 방문 시각: a hh:mm:ss')
  const submit = () => {
    setData(currTime, user)
    Alert.alert(`2층 병역판정검사과로 가주십시오.`)
  }

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <KeyboardAwareScrollView>
        <View style={[styles.view]}>
          <View>
            <Text style={[styles.wlecomeText]}>
              아래 빈 칸에 '성함', '사시는 지역구', '방문 목적'을 작성해주시고
              {'\n'}
              제출 버튼을 눌러주세요.
            </Text>
            <View style={[styles.container]}>
              <Text style={[styles.text]}>성함 : </Text>
              <TextInput
                underlineColorAndroid={Colors.grey500}
                onChangeText={(text) => setUser({ ...user, name: text })}
                placeholder="예) 홍길동"
                style={styles.input}
              />
            </View>
            <View style={[styles.container]}>
              <Text style={[styles.text]}>시/군/구 : </Text>
              <TextInput
                underlineColorAndroid={Colors.grey500}
                onChangeText={(text) => setUser({ ...user, place: text })}
                placeholder="예) 수영구"
                style={styles.input}
              />
            </View>
            <View style={[styles.container]}>
              <Text style={[styles.text]}>방문 목적 : </Text>
              <TextInput
                underlineColorAndroid={Colors.grey500}
                onChangeText={(text) => setUser({ ...user, etc: text })}
                placeholder="예) 담당자 상담"
                style={styles.input}
              />
            </View>
            <Pressable style={[styles.submitButton]} onPress={submit}>
              <Text style={[styles.text, { color: Colors.white }]}>제출</Text>
            </Pressable>
          </View>

          <View style={[]}>
            <Image source={require('../assets/images/gutgeoni.png')} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  border: { borderWidth: 1 },
  safeAreaView: { backgroundColor: Colors.white, height: '100%', padding: 20 },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wlecomeText: { fontWeight: 'bold', fontSize: 24, marginBottom: 30 },
  container: {
    width: '40%',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  input: {
    marginTop: 5,
    fontSize: 20,
    borderRadius: 5,
    width: 400,
  },
  submitButton: {
    width: 100,
    height: 50,
    backgroundColor: Colors.blue500,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 26,
  },
})
