import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function HeaderComponent() {
  return (
    <View>
      {/* User Info */}
      <View className="flex flex-row items-center gap-2">
        <Image
          source={require("./../../../assets/images/banners/banner_login.png")}
          className="rounded-full w-12 h-12"
        />
        <View>
          <Text className="text-gray-800">Welcome to the App</Text>
          <Text className="text-gray-500">User123</Text>
        </View>
      </View>
      {/* Search bar */}
      <View className="p-3 px-5 flex-row items-center border-[2px] border-red-300 bg-white rounded-full mt-3">
        <Feather name="search" size={24} color="black" />
        <TextInput placeholder="Bạn tìm gì" className="ml-2" />
      </View>
    </View>
  );
}
