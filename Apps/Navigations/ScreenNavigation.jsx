import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "../Screens/IntroScreens/IntroScreen";
import LoginScreen from "../Screens/AuthenticationScreens/LoginScreen";
import SignUpScreen from "../Screens/AuthenticationScreens/SignUpScreen";
import HomeScreen from "../Screens/MainScreen/HomeScreen";
import DetailScreen from "../Screens/MainScreen/DetailScreen";

const Stack = createNativeStackNavigator();

export default function ScreenNavigation() {
  return (
    // ScreenNavigation
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" options = {{headerShown: false}} component={IntroScreen} />
        <Stack.Screen name="Login" options={{headerShown: true}} component={LoginScreen} />
        <Stack.Screen name="Sign Up" options={{headerShown: true}} component={SignUpScreen} />
        <Stack.Screen name="Home" options={{headerShown: false, animation: 'fade'}} component={HomeScreen} />
        <Stack.Screen name="Detail" options={{headerShown: false, animation: 'fade'}} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
