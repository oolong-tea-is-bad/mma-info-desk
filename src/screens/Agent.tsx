import React from "react";
import { SafeAreaView, View, Text} from "react-native";
import MyInput from "../components/MyInput";
import TestInput from "../components/TestInput";

export default function Agent() {
    return (
        <SafeAreaView>
            <View>
                {/* <Text>test</Text>
                <MyInput /> */}
                <TestInput category="일자" placeholder="예) 홍길동" />
                <TestInput category="방문시각" placeholder="예) 홍길동" />
                <TestInput category="시/군/구" placeholder="예) 홍길동" />
                <TestInput category="성명" placeholder="예) 홍길동" />
                <TestInput category="방문 목적" placeholder="예) 홍길동" />
                <TestInput category="안내자" placeholder="예) 홍길동" />
                <TestInput category="비고" placeholder="예) 홍길동" />
            </View>
        </SafeAreaView>
    )
}