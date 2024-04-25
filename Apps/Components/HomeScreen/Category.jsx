import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import productImagesData from "../../Database/Products";
import productGamingImagesData from "../../Database/GamingProducts";
import productLaptopImagesData from "../../Database/LaptopProducts";
import Animated, { FadeIn, FadeInDown, Easing } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export default function Category() {
  const navigation = useNavigation();
  const [categoryType, setCategoryType] = useState("office");
  // State management
  const nextCategory = () => {
    if (categoryType === "office") {
      setCategoryType("gaming");
    } else if (categoryType === "gaming") {
      setCategoryType("laptop");
    } else if (categoryType === "laptop") {
      setCategoryType("office");
    }
  };

  const getData = () => {
    switch (categoryType) {
      case "gaming":
        return productGamingImagesData;
      case "laptop":
        return productLaptopImagesData;
      default:
        return productImagesData;
    }
  };

  return (
    <View className="mt-3 flex-1">
      {/* Title */}
      <View className="flex-row">
        {/* Product display change */}
        <TouchableOpacity onPress={nextCategory}>
          <View className="bg-red-500 rounded-l-xl rounded-tr-3xl justify-center px-3 py-1 flex-row items-center space-x-2">
            <Text className="text-white font-bold text-lg text-center">
              {categoryType === "office"
                ? "PC Văn phòng"
                : categoryType === "gaming"
                ? "PC Gaming"
                : "Laptop"}
            </Text>
            <FontAwesome name="exchange" size={15} color="white" />
          </View>
        </TouchableOpacity>
        {/* Open Drawer */}
        <View className="bg-white justify-center text-right px-2 py-1">
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text className="text-cyan-700"> Sản phẩm khác </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Products Image display (add flex-1 if want to hide the tab) */}
      <View className=" mt-2 flex-row ml-2"> 
        <FlatList
          data={getData()} // Data here
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
                  onPress={() => navigation.navigate("Detail", { item })} // Navigate to detail
                >
                  <Animated.Image
                    source={item.image}
                    sharedTransitionTag="sharedTag"
                    className="w-[150px] h-[150px] rounded-md items-center"
                  />
                  <Text className="text-center mt-1">{item.name}</Text>
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
