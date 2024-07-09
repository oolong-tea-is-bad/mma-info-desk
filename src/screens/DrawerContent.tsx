import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, View, Text } from "react-native";
import type { FC } from "react";
import type { DrawerContentComponentProps } from "@react-navigation/drawer";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={[styles.content]}>
            <View>
                <Text>DrawerContent Screen Test</Text>
            </View>
        </DrawerContentScrollView>
    )
}
export default DrawerContent
const styles = StyleSheet.create({
    content: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})