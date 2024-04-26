import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function IntroScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white">
      <View>
        <Image
          source={require("./../../../assets/images/banners/banner_login.png")}
          className="w-full h-[650px] object-cover"
        />
        <View className="p-8 bg-white mt-[-20px] rounded-t-3xl">
          <TouchableOpacity
            onPress={() => navigation.navigate("Sign Up")}
            className="p-4 bg-blue-500 rounded-full elevation"
          >
            <Text className="text-white text-center text-[20px] font-bold">
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
        <View className="p-8 bg-white flex-row justify-center">
          <Text className="text-black font-semibold">Đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-black text-center">Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
