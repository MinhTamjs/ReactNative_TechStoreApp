import { View, Text } from "react-native";
import React from "react";

export default function Category() {
  return (
    <View className="mt-3 flex-row">
      <View className="bg-red-500 rounded-l-xl rounded-tr-3xl justify-center px-3 py-1">
        <Text className="text-white font-bold text-lg">PC Văn phòng</Text>
      </View>
      <View className="bg-white justify-center px-3 py-1"></View>
    </View>
  );
}
