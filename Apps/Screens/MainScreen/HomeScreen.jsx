import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderComponent from "../../Components/HomeScreen/HeaderComponent";
import Slider from "../../Components/HomeScreen/Slider";
import Category from "../../Components/HomeScreen/Category";
import DrawerScreenWrapper from "../../Navigations/DrawerScreenWrapper";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: "#F98619"}}>
      <DrawerScreenWrapper>
        <View className="py-8 px-6 flex-1 ">
          {/* Header */}
          <HeaderComponent />
          {/* Slider */}
          <Slider />
          {/* Categories */}
          <Category />
        </View>
      </DrawerScreenWrapper>
    </SafeAreaView>
  );
}
