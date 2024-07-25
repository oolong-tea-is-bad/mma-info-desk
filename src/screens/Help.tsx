import React, { useCallback, useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native'
import { MD2Colors as Colors } from 'react-native-paper'
import CollapsibleView from '../components/CollapsibleView'
import { useNavigation } from '@react-navigation/native'
import { useToggleLang } from '../contexts'
import strings from '../assets/translation/localization'

export default function Help() {
  useToggleLang()

  const navigation = useNavigation()
  const goMobilization = useCallback(() => {
    navigation.navigate('Mobilization')
  }, [])
  const goAgent = useCallback(() => {
    navigation.navigate('Agent')
  }, [])
  const goExamination = useCallback(() => {
    navigation.navigate('Examination')
  }, [])
  const goService = useCallback(() => {
    navigation.navigate('Service')
  }, [])
  const goManagement = useCallback(() => {
    navigation.navigate('Management')
  }, [])
  const goHyunyuk = useCallback(() => {
    Alert.alert(strings.현역입영센터_알림)
  }, [])
  const goMinwon1 = useCallback(() => {
    Alert.alert(strings.민원봉사실_1층_알림)
  }, [])
  const goMinwon2 = useCallback(() => {
    Alert.alert(strings.병역판정검사장_알림)
  }, [])

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <ScrollView>
        <Text style={[styles.text]}>{strings.기타업무_헤더}</Text>
        <View style={[styles.view]}>
          <CollapsibleView header={strings.동원관리과} onPress={goMobilization}>
            <Text style={[styles.collapsibleText]}>
              {strings.동원관리과_업무}
            </Text>
          </CollapsibleView>
          <CollapsibleView header={strings.운영지원과} onPress={goManagement}>
            <Text style={[styles.collapsibleText]}>
              {strings.운영지원과_업무}
            </Text>
          </CollapsibleView>
          <CollapsibleView header={strings.사회복무과} onPress={goAgent}>
            <Text style={[styles.collapsibleText]}>
              {strings.사회복무과_업무}
            </Text>
          </CollapsibleView>
          <CollapsibleView header={strings.복무관리과} onPress={goService}>
            <Text style={[styles.collapsibleText]}>
              {strings.복무관리과_업무}
            </Text>
          </CollapsibleView>
        </View>

        <View style={[styles.view]}>
          <CollapsibleView
            header={strings.병역판정검사과}
            onPress={goExamination}
          >
            <Text style={[styles.collapsibleText]}>
              {strings.병역판정검사과_업무}
            </Text>
          </CollapsibleView>
          <CollapsibleView header={strings.현역입영센터} onPress={goHyunyuk}>
            <Text style={[styles.collapsibleText]}>
              {strings.현역입영센터_업무}
            </Text>
          </CollapsibleView>
          <CollapsibleView header={strings.민원봉사실_1층} onPress={goMinwon1}>
            <Text style={[styles.collapsibleText]}>
              {strings.민원봉사실_1층_업무}
            </Text>
          </CollapsibleView>
          <CollapsibleView header={strings.병역판정검사장} onPress={goMinwon2}>
            <Text style={[styles.collapsibleText]}>
              {strings.병역판정검사장_업무}
            </Text>
          </CollapsibleView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: Colors.white },
  view: { padding: 20, flexDirection: 'row', justifyContent: 'space-around' },
  text: { fontWeight: 'bold', fontSize: 24, padding: 15 },
  collapsibleText: { fontWeight: 'bold', fontSize: 18, lineHeight: 25 },
})
