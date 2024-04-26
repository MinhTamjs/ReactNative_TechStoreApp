import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";
import HomeScreen from "../Screens/MainScreen/HomeScreen";
import GamingScreen from "../Screens/MainScreen/Category/GamingScreen";
import OfficeScreen from "../Screens/MainScreen/Category/OfficeScreen";
import LaptopScreen from "../Screens/MainScreen/Category/LaptopScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomeDrawerNavigation() {
  const Drawer = createDrawerNavigator();
  const drawerIcon = ({ focused, size }, name) => {
    return (
      <Icon
        name={name}
        size={size}
        color={focused ? Colors.active : Colors.inactive}
      />
    );
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "slide",
        drawerActiveBackgroundColor: Colors.active,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.textActive,
        drawerInactiveTintColor: Colors.inactive,
        overlayColor: Colors.transparent,
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: '45%',
          paddingTop: 20,
        },
        drawerLabelStyle: {
          fontWeight: "bold",
          fontSize: 15,
        },
        sceneContainerStyle: {
          backgroundColor: Colors.bg,
        },
      }}
    >
      <Drawer.Screen
        name="HomePage"
        options={{
          headerShown: false,
          headerStyle: { height: 50 },
          headerTitle: "",
          drawerLabel: "Home",
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name="PCVP"
        options={{
          headerShown: false,
          headerStyle: { height: 50 },
          headerTitle: "",
          drawerLabel: "PC Văn phòng",
        }}
        component={OfficeScreen}
      />
      <Drawer.Screen
        name="PCGM"
        options={{
          headerShown: false,
          headerStyle: { height: 50 },
          headerTitle: "",
          drawerLabel: "PC Gaming",
        }}
        component={GamingScreen}
      />
      <Drawer.Screen
        name="Lap"
        options={{
          headerShown: false,
          headerStyle: { height: 50 },
          headerTitle: "",
          drawerLabel: "Laptop",
        }}
        component={LaptopScreen}
      />
    </Drawer.Navigator>
  );
}

const Colors = {
  bg: "#F98619",
  active: "#FFDEC0",
  inactive: "#eee",
  textActive: "#834304",
  transparent: "transparent",
};
