import React, { FC, ReactNode, useCallback, useState } from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Collapsible from 'react-native-collapsible'
import { MD2Colors as Colors } from 'react-native-paper'

export type CollapsibleViewProps = {
  children: ReactNode
  header: string
  navigate: () => void
}

const CollapsibleView: FC<CollapsibleViewProps> = (props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const onPress = () => {
    setIsCollapsed(!isCollapsed)
  }
  const iconName = isCollapsed ? 'arrow-down' : 'arrow-up'

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
        <View>{props.children}</View>
        <Pressable onPress={props.navigate} style={[styles.submitButton]}>
          <Text>이동</Text>
        </Pressable>
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
    justifyContent: 'space-around',
    width: 200,
    height: 70,
    backgroundColor: Colors.blueGrey200,
    borderRadius: 5,
  },
  view: {
    backgroundColor: Colors.blueGrey100,
    width: 200,
    height: 130,
  },
  submitButton: {
    width: 100,
    height: 50,
    backgroundColor: Colors.blue500,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 30,
  },
})
