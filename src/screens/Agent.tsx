import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native'
import { useState } from 'react'
import { MD2Colors as Colors } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import 'moment/locale/ko'

export default function Agent() {
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
    department: '사회복무과',
  })

  var currTime = moment().format('일자: YYYY-MM-DD | 방문 시각: a hh:mm:ss')
  const submit = () => {
    setData(currTime, user)
    Alert.alert(`정보가 입력되었습니다! 2층 사회복무과로 가주십시오.`)
  }

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <KeyboardAwareScrollView>
        <Text style={[styles.wlecomeText]}>
          아래 빈 칸에 '성함', '사시는 지역구', '방문 목적'을 작성해주신 이후{' '}
          {'\n'}
          2층 사회복무과로 이동해주시길 바랍니다.
        </Text>
        <View style={[styles.view]}>
          <View>
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
                placeholder="예) 해운대구"
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
          </View>
          <View style={[styles.border]}>
            <Text>굳건이 아이콘?</Text>
          </View>
        </View>
        <Pressable style={[styles.submitButton]} onPress={submit}>
          <Text style={[styles.text, { color: Colors.white }]}>제출</Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  border: { borderWidth: 1 },
  safeAreaView: { backgroundColor: Colors.white, height: '100%', padding: 20 },
  view: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wlecomeText: { fontWeight: 'bold', fontSize: 24 },
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
