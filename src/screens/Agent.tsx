import React, { useCallback } from "react";
import { SafeAreaView, View, Text, Button, Pressable, StyleSheet, TextInput,} from "react-native";
import { useState } from "react";
// prettier-ignore
import AsyncStorage from "@react-native-async-storage/async-storage";
import TestInput from "../components/TestInput";
import SubmitButton from "../components/SubmitButton";
import moment from "moment";

export default function Agent() {
    const storeData = async (value: string) => {
        try {
            await AsyncStorage.setItem('my-key', value);
        } catch (e) {
            // saving error
        }
    };
    
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('my-key');
            if (value !== null) {
                return value
            }
        } catch (e) {
            // error reading value
        }
    };

    var test = moment().format('YYYY-MM-DD HH:mm:ss')

    const [text, setText] = useState('')
    const onChangeText = (inputText: string) => {
        setText(inputText)
    }
    
    const onPress = useCallback(() => {storeData(text)}, [])

    const testData = getData()

    return (
        <SafeAreaView>
            <View>
                {/* 일자 방문시각 시군구 성명 방문 목적 안내자 비고 */}
                <View style={styles.container}>
                    <Text style={[styles.text]}>성함 : </Text>
                    <TextInput
                        onChangeText={onChangeText}
                        placeholder="예) 홍길동"
                        style={styles.input}
                    />
                </View>
                <TestInput category="시/군/구" placeholder="예) 해운대구" />
                <TestInput category="비고" placeholder="예) 담당자 상담" />
                
                <Pressable style={[styles.submitButton]} onPress={onPress}>
                    <Text style={[styles.text]}>제출</Text>
                </Pressable>
                <Text>현재시각: {test}</Text>
                {/* <Text>{testData}</Text> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: 'row', padding: 10, borderWidth: 1},
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
        backgroundColor: 'lightblue' 
    },
    text: {fontWeight: 'bold', fontSize: 20}
})