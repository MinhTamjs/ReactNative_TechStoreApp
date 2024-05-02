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
      <Animated.Image
        source={item.image}
        style={{ width: width, height: width }}
        sharedTransitionTag="sharedTag"
      />
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
            MAINBOARD Mainboard Asus Prime H510M-K R2.0 | Socket 1200, M-ATX, 2
            khe ram CPU CPU Intel Core i3 10105F | TRAY, KHÔNG FAN RAM Ram GEIL
            Super Luce Black RGB 8GB, DDR4, 3200MHz SSD Ổ Cứng SSD 256G Patriot
            P300 | PCIe Gen3, M.2 NVMe VGA VGA PNY GTX 1650 4GB DUAL GDDR6 2 Fan
            PSU Nguồn Centaur 450W 80 Plus CASE Thùng máy Case Magic MIX-Tower
            Đen | M-ATX, không fan Tản Nhiệt Tản nhiệt khí CPU Leopard KF400 Led
            RGB - Đen FAN CASE Fan Case Redmoon F3 - Đen | Kit 5 Fan Led RGB,
            kèm sẵn HUB và Remote
          </Text>
        </ScrollView>
        <TouchableOpacity
          style={{ backgroundColor: "#e45d5d", height: 50, width: 300 }}
          className="mb-6 mx-auto flex justify-center items-center rounded-full"
        >
          <Text className="text-white font-bold" style={{ fontSize: 20 }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Detail;
