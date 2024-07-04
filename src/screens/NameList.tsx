import React from "react";
import { SafeAreaView, View, Text, Button, Pressable, StyleSheet} from "react-native";
import { useState, useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TestInput from "../components/TestInput";
import SubmitButton from "../components/SubmitButton";
import moment from "moment";

export default function NameList() {
    const getAllPairs = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys()
          const pairs = await AsyncStorage.multiGet(keys)
          
          console.log(pairs)
          return pairs
        } catch(e) {
          throw e
        }
    }

    useEffect(() => {
      const pairs = getAllPairs()
    }, [])



    return (
        <SafeAreaView>
            <View>
                <Text>{getAllPairs()}</Text>
            </View>
        </SafeAreaView>
    )
}

