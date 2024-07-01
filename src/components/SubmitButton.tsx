import React, {useState, FC} from "react";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type SubmitButtonProps ={
}

const SubmitButton: FC<SubmitButtonProps> = () => {
    return (
        <Pressable 
            style={[styles.submitButton]}
        >
            <Text style={[styles.text]}>제출</Text>
        </Pressable>
    )
}
export default SubmitButton

const styles = StyleSheet.create({
    submitButton: {
        borderWidth: 1, 
        width: 50, 
        height: 50,
        backgroundColor: 'lightblue' 
    },
    text: {fontWeight: 'bold', fontSize: 20}
})