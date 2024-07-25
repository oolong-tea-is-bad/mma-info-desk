import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Collapsible from 'react-native-collapsible'
import { MD2Colors as Colors } from 'react-native-paper'
import strings from '../assets/translation/localization'
import { useToggleLang } from '../contexts'

export type CollapsibleViewProps = {
  children: ReactNode
  header: string
  onPress: () => void
}

const CollapsibleView: FC<CollapsibleViewProps> = (props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

  const onPress = () => {
    setIsCollapsed(!isCollapsed)
  }
  const iconName = isCollapsed ? 'arrow-down' : 'arrow-up'

  useToggleLang()

  return (
    <View>
      <Pressable
        style={[
          styles.header,
          isCollapsed
            ? {}
            : { borderBottomEndRadius: 0, borderBottomStartRadius: 0 },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.headerText]}>{props.header}</Text>
        <Icon name={iconName} size={20} onPress={onPress} />
      </Pressable>

      <Collapsible style={[styles.view]} collapsed={isCollapsed}>
        <View style={[styles.textView]}>{props.children}</View>

        <View style={[styles.buttonView]}>
          <Pressable onPress={props.onPress} style={[styles.submitButton]}>
            <Text style={[styles.buttonText]}>{strings.이동}</Text>
          </Pressable>
        </View>
      </Collapsible>
    </View>
  )
}
export default CollapsibleView

const styles = StyleSheet.create({
  headerText: { fontWeight: 'bold', fontSize: 24 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: 250,
    paddingVertical: 20,
    // height: 120,
    backgroundColor: Colors.blueGrey200,
    borderRadius: 5,
  },
  view: {
    backgroundColor: Colors.blueGrey100,
    width: 250,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  textView: {
    padding: 10,
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  submitButton: {
    width: 80,
    height: 50,
    backgroundColor: Colors.blue500,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 20,
  },
})
