import { View, Text } from 'react-native'
import React from 'react'
import GamingCategory from '../../../Components/HomeScreen/GamingCategory'


export default function GamingScreen() {
  return (
    <View className="py-8 px-6 flex-1 bg-white">
      <GamingCategory/>
    </View>
  )
}