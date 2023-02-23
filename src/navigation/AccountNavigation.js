import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account } from "../screens/Account";

const Stack = createNativeStackNavigator();

export function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Account" 
        component={Account}
        options={{ headerTitle: "Mi cuenta" }}
      />
    </Stack.Navigator>
  );
}