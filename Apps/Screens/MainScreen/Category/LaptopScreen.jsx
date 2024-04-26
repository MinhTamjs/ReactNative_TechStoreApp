import { View, Text } from "react-native";
import React from "react";
import LaptopCategory from "../../../Components/HomeScreen/LaptopCategory";
import DrawerScreenWrapper from "../../../Navigations/DrawerScreenWrapper";

export default function LaptopScreen() {
  return (
    <DrawerScreenWrapper>
      <View className="py-8 px-6 flex-1 bg-white">
        <LaptopCategory />
      </View>
    </DrawerScreenWrapper>
  );
}
