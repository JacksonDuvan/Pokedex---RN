import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { AccountNavigation } from './AccountNavigation'
import { FavoriteNavigation } from './FavoriteNavigation'
import { PokedexNavigation } from './PokedexNavigation'

const Tab = createBottomTabNavigator()

export const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName='Pokedexa'>
      <Tab.Screen 
        name="Favoritex" 
        component={FavoriteNavigation} 
        options={{ 
          tabBarLabel: "Favoritos",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size}/>
        }}
      />

      <Tab.Screen 
        name="Pokedexa" 
        component={PokedexNavigation} 
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
          headerShown: false,
        }}
      />

      <Tab.Screen 
        name="Accountx" 
        component={AccountNavigation} 
        options={{
          tabBarLabel: "Mi cuenta",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size}/>
        }}
       />
    </Tab.Navigator>
  )
}

function renderPokeball(){
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    />
  )
}
