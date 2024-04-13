import { View, Text } from 'react-native'
import React from 'react'

export default function TabNavigation() {
  return (
    <View>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}