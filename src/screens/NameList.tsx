import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native'
import { useState, useCallback, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MD2Colors as Colors } from 'react-native-paper'

export default function NameList() {
  const [pairs, setPairs] = useState<any>()

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
      setPairs([])

      console.log('Cleared.')
    } catch (e) {
      // clear error
    }
  }

  const shouldDelete = () => {
    Alert.alert(
      '주의! 한 번 삭제된 명부 기록은 복구 불가능 합니다!',
      '삭제하시겠습니까?',
      [{ text: '삭제', onPress: () => clearAll() }, { text: '취소' }]
    )
  }

  const getAllPairs = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const pairs = await AsyncStorage.multiGet(keys)
      setPairs(pairs)

      console.log(pairs)
    } catch (e) {
      throw e
    }
  }
  useEffect(() => {
    getAllPairs()
  }, [])

  const renderItem = ({ item }: any) => {
    return (
      <View>
        <Text style={[styles.text]}>
          {item[0].slice(0, -3)} {'\n'}
          성함 : {item[1].split('"')[1]} {'\n'}
          시/군/구 : {item[1].split('"')[3]} {'\n'}
          방문 목적 : {item[1].split('"')[5]} {'\n'}
          방문과: {item[1].split('"')[7]}
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <FlatList
        data={pairs}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View style={[styles.container]} />}
        extraData={pairs}
      />
      <Pressable style={[styles.submitButton]} onPress={shouldDelete}>
        <Text style={[styles.text, { color: Colors.white }]}>삭제</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: { backgroundColor: Colors.white, height: '100%' },
  container: { borderWidth: 1, borderColor: Colors.grey500 },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    color: Colors.grey500,
  },
  submitButton: {
    width: 70,
    height: 50,
    backgroundColor: Colors.red500,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
