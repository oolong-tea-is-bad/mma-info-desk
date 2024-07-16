import React, { useCallback, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { MD2Colors as Colors } from 'react-native-paper'
import CollapsibleView from '../components/CollapsibleView'
import { useNavigation } from '@react-navigation/native'

export default function Help() {
  const navigation = useNavigation()
  const goMobilization = useCallback(() => {
    navigation.navigate('Mobilization')
  }, [])

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <ScrollView>
        <View style={[styles.view]}>
          <Text style={[styles.text]}>
            전 페이지에서 해당 업무를 못 찾으셨다면 아래를 참조해 해당되는
            부서를 눌러주세요.
          </Text>
          <CollapsibleView header="동원관리과" navigate={goMobilization}>
            <Text style={[]}>예비군 관련 업무 </Text>
          </CollapsibleView>
          {/* <Text style={[styles.text]}>
            동원관리과: {'\n'} - 
            예비군 관련 업무 {'\n'}{'\n'}
            
            운영지원과: {'\n'} - 
            병역명문가 홍보, 대학교 방송학과, 견학체험, 병무비리고발 {'\n'} {'\n'}
            
            사회복무과: {'\n'} - 
            공익 자리 배정, 사회복무요원 선복무중 훈련소면제 문의,
            산업체 서류제출, 승선관리 {'\n'}{'\n'}
            
            복무관리과: {'\n'} - 
            현재 복무중인 사회복무요원 관련 업무  {'\n'}{'\n'}
            
            현역입영센터: {'\n'} - 
            1,2,3 신체등급인 사람이 입영 문의 / 면접 / 운전등 자격 서류 제출,
            병역진로설계지원센터 상담가능 {'\n'}{'\n'}
            
            본관 검사과: {'\n'} - 
            생계감면 병역판정계획 (첫
            신체검사 신청, 절차 문의, 신검도 안받았을때 입대하는법) {'\n'} {'\n'}
            
            검사장: {'\n'} - 
            병역판정검사, 입영판정검사, 나라사랑카드 재발급 모두 2층 7급재검,
            서류보완, 귀가 3층 {'\n'}{'\n'}
            
            민원봉사실 1층 : {'\n'} - 
            전역증, 국외여행허가, 예비군 면제, 재검신청 병적증명서,
            병적기록표 등과 같은 기타 서류 발급 업무
          </Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: Colors.white },
  view: { padding: 10 },
  text: { fontWeight: 'bold', fontSize: 24 },
})
