import React, { useCallback } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Alert,
  Pressable,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MD2Colors as Colors } from 'react-native-paper'
import strings from '../assets/translation/localization'
import { useToggleLang } from '../contexts'

export default function Home() {
  const navigation = useNavigation()

  const goAgent = useCallback(() => navigation.navigate('Agent'), [])
  const goExamination = useCallback(
    () => navigation.navigate('Examination'),
    []
  )
  const goMobilization = useCallback(
    () => navigation.navigate('Mobilization'),
    []
  )
  const goHelp = useCallback(() => {
    navigation.navigate('Help')
  }, [])

  // 이게 있어야지 이 자식 컴포넌트가 컨텍스트를 인식하나보네!!!!11
  useToggleLang()

  return (
    <SafeAreaView style={[styles.flex, { backgroundColor: Colors.white }]}>
      <View style={[styles.view, styles.flex]}>
        <View style={[styles.content]}>
          <Pressable
            style={[styles.box]}
            onPress={() => Alert.alert(strings.신체검사_알림)}
          >
            <Text style={[styles.boxText]}>{strings.신체검사}</Text>
          </Pressable>

          <Pressable
            style={[styles.box]}
            onPress={() => Alert.alert(strings.병적증명서_알림)}
          >
            <Text style={[styles.boxText]}>{strings.병적증명서_발급}</Text>
          </Pressable>

          <Pressable style={[styles.box]} onPress={goMobilization}>
            <Text style={[styles.boxText]}>{strings.예비군_연기}</Text>
          </Pressable>
        </View>
        <View style={[styles.content]}>
          <Pressable style={[styles.box]} onPress={goAgent}>
            <Text style={[styles.boxText]}>
              {strings.사회복무요원_자리_배정}
            </Text>
          </Pressable>

          <Pressable style={[styles.box]} onPress={goExamination}>
            <Text style={[styles.boxText]}>{strings.생계_감면_관련_업무}</Text>
          </Pressable>

          <Pressable style={[styles.box]} onPress={goHelp}>
            <Text style={[styles.boxText]}>{strings.기타업무}</Text>
          </Pressable>
        </View>
      </View>

      <Pressable style={[styles.help]}>
        <Text
          onPress={() => Alert.alert(strings.도움말_알림)}
          style={[styles.helpText]}
        >
          {strings.도움말}
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  border: { borderWidth: 1 },
  flex: { flex: 1 },
  view: { justifyContent: 'space-around' },
  content: { flexDirection: 'row', justifyContent: 'space-evenly' },
  box: {
    width: 300,
    height: 300,
    backgroundColor: Colors.blueGrey500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxText: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 70,
  },
  help: { flexDirection: 'row-reverse', marginRight: 20, marginBottom: 20 },
  helpText: {
    borderRadius: 5,
    width: 120,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    color: Colors.white,
    backgroundColor: Colors.blue500,
  },
})
