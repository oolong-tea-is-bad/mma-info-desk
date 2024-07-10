import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from "./src/screens/MainNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.safeAreaView]}>
        <MainNavigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
})