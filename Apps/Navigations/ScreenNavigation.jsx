import { View, Text } from "react-native";
import React from "react";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function ScreenNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={IntroScreen} />
        <Stack.Screen name="Settings" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
