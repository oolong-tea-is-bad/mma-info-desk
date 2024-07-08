import React from "react";
import { SafeAreaView, View, Text, Button, Pressable, StyleSheet} from "react-native";
import { useState, useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NameList() {
  const [pairs, setPairs] = useState<any>()
    
  const getAllPairs = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const pairs = await AsyncStorage.multiGet(keys)

      setPairs(pairs)
      console.log(pairs)
    } catch(e) {
      throw e
    }
  }

  useEffect(() => { getAllPairs() }, [])

  type parseType = {
    name: string,
    place: string,
    etc: string
  }

  // const parsedStr: parseType = JSON.parse(pairs)
  // useEffect(() => {console.log(`성함: ${parsedStr.name}`)})

  return (
      <SafeAreaView>
        <View style={[styles.container]}>
          {pairs && pairs.map((item: string[]) => (
            <Text style={[styles.text]}>
              {item[0]} {"\n"} 
              {item[1].slice(1,-1).split(',')[0]} {"\n"}
              {item[1].slice(1,-1).split(',')[1]} {"\n"}
              {item[1].slice(1,-1).split(',')[2]} {"\n"}
              {item[1].slice(1,-1).split(',')[3]} 
            </Text>
          ))}          
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {padding: 10, borderWidth: 1},
  text: {fontWeight: 'bold', fontSize: 20, borderWidth: 1, padding: 10}
})