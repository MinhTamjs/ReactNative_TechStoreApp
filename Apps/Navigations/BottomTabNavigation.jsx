import { View, Text, Dimensions } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/MainScreen/HomeScreen";
import CartScreen from "../Screens/MainScreen/CartScreen";
import UserScreen from "../Screens/MainScreen/UserScreen";
import { AntDesign } from "@expo/vector-icons";

export default function BottomTabNavigation() {
  const screenWidth = Dimensions.get("window").width;
  const tabBarWidth = 300; // Chiều rộng của thanh tab
  const tabBarMarginHorizontal = (screenWidth - tabBarWidth) / 2;

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: "#F9BC19",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: {
          position: "absolute",
          height: 62,
          width: 300,
          bottom: 17,
          left: tabBarMarginHorizontal,
          right: tabBarMarginHorizontal,
          borderRadius: 50,
          backgroundColor: "#F94848",
          borderTopWidth: 1,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          marginBottom: 5, // Giảm khoảng cách giữa icon và text
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UserTab"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
