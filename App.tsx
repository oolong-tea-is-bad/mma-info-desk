import React, { useCallback, useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from './src/screens/MainNavigator'
import { ToggleLangProvider } from './src/contexts'

import strings from './src/assets/translation/localization'
import { changeLanguage } from './src/assets/translation/localization'

export default function App() {
  const [currLang, setCurrLang] = useState<string>('en')
  const changeLang = () => {
    if (currLang == '한') {
      setCurrLang('EN')
      changeLanguage('한')
    } else {
      setCurrLang('한')
      changeLanguage('EN')
    }
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.safeAreaView]}>
        <ToggleLangProvider toggleLang={changeLang}>
          <MainNavigator />
        </ToggleLangProvider>
      </SafeAreaView>
    </NavigationContainer>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
})
