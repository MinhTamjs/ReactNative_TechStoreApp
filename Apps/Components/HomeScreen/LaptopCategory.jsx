import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { FadeIn, FadeInDown, Easing } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import productLaptopImagesData from "../../Database/LaptopProducts";

export default function LaptopCategory() {
  const navigation = useNavigation();
  return (
    <View className="mt-3 flex-1">
      {/* Title */}
      <View className="flex-row">
        <View className="bg-red-500 rounded-l-xl rounded-tr-3xl justify-center px-3 py-1">
          <Text className="text-white font-bold text-lg">Laptop</Text>
        </View>
        <View className="bg-white justify-center px-3 py-1"></View>
      </View>
      {/* Products Image display */}
      <View className="flex-1 mt-2 flex-row">
        <FlatList
          data={productLaptopImagesData} // Data here
          numColumns={2}
          columnWrapperStyle={{ gap: 10, paddingHorizontal: 12 }}
          contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
          keyExtractor={(item) => item.id} // Take the data
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                entering={FadeInDown.delay(5 * index).easing(Easing.ease)}
              >
                <TouchableOpacity
                  className="justify-center mr-2"
                  onPress={() => navigation.navigate("Detail", { item })}
                >
                  <Image
                    source={item.image}
                    className="w-[150px] h-[150px] rounded-md items-center"
                  />
                  <Text className="text-center">{item.name}</Text>
                  <Text className="mb-5 text-center">{item.price}</Text>
                </TouchableOpacity>
              </Animated.View>
            );
          }}
        />
      </View>
    </View>
  );
}
