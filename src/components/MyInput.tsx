import React, {useState} from "react";
import { View, TextInput, StyleSheet } from "react-native";

const MyInput = () => {
    const [text, setText] = useState('')

    const onChangeText = (inputText: string) => {
        setText(inputText)
    }

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="아무거나 입력하세요..."
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    input: {
        height: 40,
        width: 50,
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default MyInput