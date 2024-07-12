import React, { useCallback, useState } from 'react'
// prettier-ignore
import { View, Text, SafeAreaView, TextInput, StyleSheet, Pressable, Alert, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MD2Colors as Colors } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login() {
  const realUser = 'busan'
  const realPassword = 'ekdwlrtlf'
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigation = useNavigation()
  const goNameList = useCallback(() => navigation.navigate('NameList'), [])

  const onPress = () => {
    if (username == realUser && password == realPassword) {
      goNameList()
    } else {
      Alert.alert(
        '아이디 혹은 패스워드가 올바르지 않습니다. 다시 시도해주십시오.'
      )
    }
    console.log({ username }, { password })
  }

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <KeyboardAwareScrollView>
        <View style={[styles.view]}>
          <Text style={[styles.wlecomeText]}>
            해당 페이지는 병무청 직원들이 사용하는 페이지입니다. {'\n'}
            민원인 분들은 왼쪽 위 화살표를 눌러 전 페이지로 돌아가 용무
            처리해주시면 감사하겠습니다.
          </Text>
          <View style={[styles.viewTextInput]}>
            <Text style={[styles.text]}>아이디:</Text>
            <TextInput
              style={[styles.textInput]}
              value={username}
              onChangeText={setUsername}
              secureTextEntry
            />
          </View>
          <View style={[styles.viewTextInput]}>
            <Text style={[styles.text]}>패스워드:</Text>
            <TextInput
              style={[styles.textInput]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View>
            <Pressable style={styles.button} onPress={onPress}>
              <Text style={[styles.text, { color: Colors.white }]}>로그인</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    height: '100%',
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
