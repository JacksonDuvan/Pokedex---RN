import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favorite } from "../screens/Favorite";
import { Pokemon } from '../screens/Pokemon'

const Stack = createNativeStackNavigator();

export function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Favorite" 
        component={Favorite} 
        options={{ headerTitle: "Favoritos", }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}