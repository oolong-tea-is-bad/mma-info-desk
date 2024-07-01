import React from "react";
import { SafeAreaView, View, Text, Button, Pressable, StyleSheet} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TestInput from "../components/TestInput";
import SubmitButton from "../components/SubmitButton";
import moment from "moment";

export default function Examination() {
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

    return (
        <SafeAreaView>
            <View>
                {/* 일자 방문시각 시군구 성명 방문 목적 안내자 비고 */}
                <TestInput category="성명" placeholder="예) 홍길동" />
                <TestInput category="시/군/구" placeholder="예) 해운대구" />
                <TestInput category="비고" placeholder="예) 담당자 상담" />
                <SubmitButton />
            </View>
        </SafeAreaView>
    )
}

