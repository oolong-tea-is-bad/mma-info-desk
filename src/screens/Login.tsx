import React, { useCallback, useState } from 'react'
// prettier-ignore
import { View, Text, SafeAreaView, TextInput, StyleSheet, Pressable, Alert, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MD2Colors as Colors } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import strings from '../assets/translation/localization'
import { useToggleLang } from '../contexts'

export default function Login() {
  const realUser = 'busan'
  const realPassword = 'ekdwlrtlf'
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigation = useNavigation()
  const goNameList = useCallback(() => navigation.navigate('NameList'), [])
  useToggleLang()

  const onPress = () => {
    if (username == realUser && password == realPassword) {
      goNameList()
    } else {
      Alert.alert(strings.로그인_알림)
    }
    console.log({ username }, { password })
  }

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <KeyboardAwareScrollView>
        <View style={[styles.view]}>
          <Text style={[styles.wlecomeText]}>{strings.로그인_헤더}</Text>
          <View style={[styles.viewTextInput]}>
            <Text style={[styles.text]}>{strings.아이디}:</Text>
            <TextInput
              style={[styles.textInput]}
              value={username}
              onChangeText={setUsername}
              secureTextEntry
            />
          </View>
          <View style={[styles.viewTextInput]}>
            <Text style={[styles.text]}>{strings.패스워드}:</Text>
            <TextInput
              style={[styles.textInput]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View>
            <Pressable style={styles.button} onPress={onPress}>
              <Text style={[styles.text, { color: Colors.white }]}>
                {strings.로그인}
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 100,
  },
  wlecomeText: { fontWeight: 'bold', fontSize: 24, textAlign: 'center' },
  view: { margin: 10, alignItems: 'center' },
  viewTextInput: { marginTop: 30, width: '60%' },
  text: { fontSize: 26, fontWeight: 'bold' },
  textInput: { borderWidth: 1, marginTop: 5, fontSize: 25, borderRadius: 5 },
  button: {
    borderWidth: 1,
    borderColor: Colors.blueGrey500,
    padding: 10,
    marginTop: 20,
    width: 100,
    alignItems: 'center',
    backgroundColor: Colors.blue500,
    borderRadius: 5,
  },
})
