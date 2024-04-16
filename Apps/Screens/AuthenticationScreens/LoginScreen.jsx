import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-red-100">
      {/* Logo */}
      <View className="flex-row justify-center mt-20">
        <Image
          source={require("./../../../assets/images/logo/logo.png")}
          className="w-[200px] h-[100px] object-cover"
        />
      </View>
      {/* Login form */}
      <View
        className="flex-1 bg-white px-8 pt-8 mt-20"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value="minhtamitech@gmail.com"
            placeholder="Enter your email"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            secureTextEntry
            value="123456789"
            placeholder="Enter your password"
          />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="text-gray-700">Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-3 bg-yellow-400 rounded-xl"
            onPress={() => navigation.navigate("Home")}
          >
            <Text className="font-xl font-bold text-center text-gray-700">
              Login
            </Text>
          </TouchableOpacity>
          <Text className="text-xl text-gray-700 font-bold text-center py-5">
            Or
          </Text>
          <TouchableOpacity
            className="py-3 bg-red-200 rounded-xl"
            onPress={() => navigation.navigate("Sign Up")}
          >
            <Text className="font-xl font-bold text-center text-gray-700">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
