import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/MainScreen/HomeScreen";
import GamingScreen from "../Screens/MainScreen/Category/GamingScreen";
import OfficeScreen from "../Screens/MainScreen/Category/OfficeScreen";

export default function HomeDrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomePage"
        options={{
          headerShown: false,
          headerStyle: { height: 50 },
          headerTitle: "",
          drawerLabel: "Home",
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="PCVP"
        options={{
          headerShown: true,
          headerStyle: { height: 50 },
          headerTitle: "",
          drawerLabel: "PC Văn phòng",
        }}
        component={OfficeScreen}
      />
      <Drawer.Screen
        name="PCGM"
        options={{
          headerShown: true,
          headerStyle: { height: 50 },
          headerTitle: "",
          drawerLabel: "PC Gaming",
        }}
        component={GamingScreen}
      />
    </Drawer.Navigator>
  );
}