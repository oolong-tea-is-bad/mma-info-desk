import React, {useState, FC} from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Text } from "react-native";

export type TestInputProps = {
    category: string
    placeholder: string
}

const TestInput: FC<TestInputProps> = ({category, placeholder}) => {
    const [text, setText] = useState('')
    const onChangeText = (inputText: string) => {
        setText(inputText)
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.text]}>{category} : </Text>
            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={styles.input}
            />
        </View>
    )
}
export default TestInput

const styles = StyleSheet.create({
    container: {flexDirection: 'row', padding: 10, borderWidth: 1},
    text: {fontSize: 30},
    input: {
        height: 40,
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
    }
})