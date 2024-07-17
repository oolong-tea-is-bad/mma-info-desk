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

export default function Help() {
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
    Alert.alert('나가셔서 오른쪽 계단 따라 현역입영센터로 가주십시요.')
  }, [])
  const goMinwon = useCallback(() => {
    Alert.alert('나가셔서 오른쪽 건물 민원봉사실로 가주십시오.')
  }, [])

  // prettier-ignore
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <ScrollView>
        <Text style={[styles.text]}>
          전 페이지에서 해당 업무를 못 찾으셨다면 아래를 참조해 해당되는
          부서를 눌러주세요.
        </Text>
        <View style={[styles.view]}>
          <CollapsibleView header="동원관리과" onPress={goMobilization}>
            <Text style={[styles.collapsibleText]}>- 예비군 연기</Text>
          </CollapsibleView>
          <CollapsibleView header="운영지원과" onPress={goManagement}>
            <Text style={[styles.collapsibleText]}>
              - 병역명문가 홍보 {'\n'}
              - 대학교 방송학과 {'\n'}
              - 견학체험 {'\n'}
              - 병무비리고발
            </Text>
          </CollapsibleView>
          <CollapsibleView header="사회복무과" onPress={goAgent}>
            <Text style={[styles.collapsibleText]}>
              - 공익 자리 배정 {'\n'}
              - 사회복무요원 선복무중 훈련소 면제 문의 {'\n'}
              - 산업체 서류제출 {'\n'}
              - 승선관리
            </Text>
          </CollapsibleView>
          <CollapsibleView header="복무관리과" onPress={goService}>
            <Text style={[styles.collapsibleText]}>
              - 현재 복무중인 사회복무요원 관련 업무
            </Text>
          </CollapsibleView>
        </ View>

        <View style={[styles.view]}>
          <CollapsibleView header="병역판정검사과" onPress={goExamination}>
            <Text style={[styles.collapsibleText]}>
              - 생계감면 {'\n'}
              - 병역판정계획 {'\n'}
              - 첫 신체검사 신청
            </Text>
          </CollapsibleView>
          <CollapsibleView header="현역입영센터" onPress={goHyunyuk}>
            <Text style={[styles.collapsibleText]}>
              - 1,2,3 신체등급인 사람이 입영 문의 / 면접 / 운전등 자격 서류 제출 {'\n'}
              - 병역진로설계지원센터 상담가능 
            </Text>
          </CollapsibleView>
          <CollapsibleView header="민원봉사실 1층" onPress={goMinwon}>
            <Text style={[styles.collapsibleText]}>
              - 전역증 {'\n'}
              - 국외여행허가 {'\n'}
              - 예비군 면제 {'\n'}
              - 재검신청 병적증명서 {'\n'}
              - 병적기록표 등과 같은 기타 서류 발급 업무
            </Text>
          </CollapsibleView>
          <CollapsibleView header="병역판정검사장" onPress={goMinwon}>
            <Text style={[styles.collapsibleText]}>
              - 병역판정검사 {'\n'}
              - 입영판정검사 {'\n'}
              - 나라사랑카드 재발급 {'\n'}
              - 7급재검 {'\n'}
              - 서류보완
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
  collapsibleText: { fontWeight: 'bold', fontSize: 18 },
})
