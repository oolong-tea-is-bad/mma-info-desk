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
import strings from '../assets/translation/localization'
import { useToggleLang } from '../contexts'

export default function NameList() {
  useToggleLang()
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
    Alert.alert(strings.삭제_알림1, strings.삭제_알림2, [
      { text: strings.삭제, onPress: () => clearAll() },
      { text: strings.취소 },
    ])
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
          {strings.성함} : {item[1].split('"')[1]} {'\n'}
          {strings.지역구} : {item[1].split('"')[3]} {'\n'}
          {strings.방문_목적} : {item[1].split('"')[5]} {'\n'}
          {strings.방문과}: {item[1].split('"')[7]}
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
        <Text style={[styles.text, { color: Colors.white }]}>
          {strings.삭제}
        </Text>
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
    // width: 70,
    height: 50,
    backgroundColor: Colors.red500,
    borderRadius: 5,
    justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'flex-start',
  },
})
