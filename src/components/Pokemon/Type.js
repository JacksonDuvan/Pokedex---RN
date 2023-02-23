import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import map from 'lodash/map'
import capitalize from 'lodash/capitalize'
import { getColorByPokemonType } from '../../utils/getColorByPokemonType';

export function Type(props) {
  const { types } = props
 
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View 
          style={{ 
            ...styles.pill, 
            backgroundColor: getColorByPokemonType(item.type.name) 
          }} 
          key={index}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  pill: { 
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10
  }
})