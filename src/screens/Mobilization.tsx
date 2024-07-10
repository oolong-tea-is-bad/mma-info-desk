import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native'
import { useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import 'moment/locale/ko'

export default function Mobilization() {
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
    department: '동원관리과',
  })

  var currTime = moment().format('일자: YYYY-MM-DD | 방문 시각: a hh:mm:ss')
  const submit = () => {
    setData(currTime, user)
  }

  return (
    <SafeAreaView>
      <View>
        {/* 일자 방문시각 시군구 성명 방문 목적 안내자 비고 */}
        <View style={styles.container}>
          <Text style={[styles.text]}>성함 : </Text>
          <TextInput
            onChangeText={(text) => setUser({ ...user, name: text })}
            placeholder="예) 홍길동"
            style={styles.input}
          />
        </View>
        <View style={styles.container}>
          <Text style={[styles.text]}>시/군/구 : </Text>
          <TextInput
            onChangeText={(text) => setUser({ ...user, place: text })}
            placeholder="예) 해운대구"
            style={styles.input}
          />
        </View>
        <View style={styles.container}>
          <Text style={[styles.text]}>비고 : </Text>
          <TextInput
            onChangeText={(text) => setUser({ ...user, etc: text })}
            placeholder="예) 담당자 상담"
            style={styles.input}
          />
        </View>

        <Pressable style={[styles.submitButton]} onPress={submit}>
          <Text style={[styles.text]}>제출</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 10, borderWidth: 1 },
  input: {
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
  },
  submitButton: {
    borderWidth: 1,
    width: 50,
    height: 50,
    backgroundColor: 'lightblue',
  },
  text: { fontWeight: 'bold', fontSize: 20 },
})
