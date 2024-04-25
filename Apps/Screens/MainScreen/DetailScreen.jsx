import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HeaderComponent from "../../Components/DetailScreen/Header";
import Animated from "react-native-reanimated";

function Detail({ route }) {
  const { item } = route.params; // Nhận dữ liệu chuyển qua từ Category
  const { width } = useWindowDimensions();

  return (
    <View className="bg-white flex-1">
      <HeaderComponent />
      {/* Products info */}
      <Animated.Image source={item.image} style={{ width: width, height: width }} sharedTransitionTag="sharedTag" />
      {/* Description */}
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-10"
      >
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
          <View className="flex-cl justify-between items-start gap-2">
            <Text
              className="font-bold text-neutral-700"
              style={{ fontSize: 30 }}
            >
              {item.name}
            </Text>
            <Text
              className="font-bold text-orange-400"
              style={{ fontSize: 30 }}
            >
              {item.price}
            </Text>
          </View>
          <Text style={{ fontSize: 15 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </ScrollView>
        <TouchableOpacity
          style={{ backgroundColor: "#e45d5d", height: 50, width: 300}}
          className="mb-6 mx-auto flex justify-center items-center rounded-full"
        >
          <Text className="text-white font-bold" style={{fontSize: 20}}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Detail;
