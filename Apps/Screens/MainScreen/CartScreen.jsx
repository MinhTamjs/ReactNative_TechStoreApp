import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import productLaptopImagesData from "../../Database/LaptopProducts";

export default function CartScreen() {
  const navigation = useNavigation();
  const [quantities, setQuantities] = useState(
    productLaptopImagesData.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + delta),
    }));
  };

  return (
    <View className="bg-white flex-1">
      <FlatList
        className="p-1"
        data={productLaptopImagesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#FEECEC",
              margin: 10,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 100, height: 100, borderRadius: 5 }}
            />
            <Text style={{ flex: 1, marginLeft: 10 }}>{item.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => handleQuantityChange(item.id, -1)}
              >
                <FontAwesome name="minus-circle" size={24} color="red" />
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 10 }}>
                {quantities[item.id]}
              </Text>
              <TouchableOpacity
                className="mr-2"
                onPress={() => handleQuantityChange(item.id, 1)}
              >
                <FontAwesome name="plus-circle" size={24} color="green" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#EE3F3F",
                padding: 8,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "white" }}>thanh toán</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View
        className="justify-between bg-sky-50"
      >
        <TouchableOpacity
          style={{ backgroundColor: "#EE3F3F", height: 60, width: 300 }}
          className="mt-3 mb-40 mx-auto justify-center items-center rounded-full elevation"
        >
          <Text className="text-white font-bold" style={{ fontSize: 20 }}>
            Thanh toán
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
