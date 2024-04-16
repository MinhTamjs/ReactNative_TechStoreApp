import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderComponent from "../../Components/HomeScreen/HeaderComponent";
import Slider from "../../Components/HomeScreen/Slider";
import Category from "../../Components/HomeScreen/Category";

export default function HomeScreen() {
  return (
    <View className="py-8 px-6 flex-1 bg-white">
      {/* Header */}
      <HeaderComponent />
      {/* Slider */}
      <Slider />
      {/* Categories */}
      <Category/>
    </View>
  );
}
