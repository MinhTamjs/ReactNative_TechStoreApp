import { View, Text } from "react-native";
import React from "react";
import GamingCategory from "../../../Components/HomeScreen/GamingCategory";
import DrawerScreenWrapper from "../../../Navigations/DrawerScreenWrapper";

export default function GamingScreen() {
  return (
    <DrawerScreenWrapper>
      <View className="py-8 px-6 flex-1 bg-white">
        <GamingCategory />
      </View>
    </DrawerScreenWrapper>
  );
}
