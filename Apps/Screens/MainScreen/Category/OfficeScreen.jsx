import { View, Text } from "react-native";
import React from "react";
import OfficeCategory from "../../../Components/HomeScreen/OfficeCategory";
import DrawerScreenWrapper from "../../../Navigations/DrawerScreenWrapper";

export default function OfficeScreen() {
  return (
    <DrawerScreenWrapper>
      <View className="py-8 px-6 flex-1 bg-white">
        <OfficeCategory />
      </View>
    </DrawerScreenWrapper>
  );
}
