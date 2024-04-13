import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function IntroScreen() {
  return (
    <View>
      <Image source={require("./../../../assets/images/banners/banner_login.png")}
        className="w-full h-[650px] object-cover"
      />
      <View className="p-8 bg-white mt-[-20px] rounded-t-3xl shadow-sm">
        <TouchableOpacity onPress={() => console.log("Sign in")} className="p-4 bg-blue-500 rounded-full elevation">
          <Text className="text-white text-center text-[20px] font-bold">Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

