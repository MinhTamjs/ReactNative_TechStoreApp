import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import HeaderComponent from "../../Components/DetailScreen/Header";
import Animated from "react-native-reanimated";

function Detail({ route }) {
  const { item } = route.params; // Nhận dữ liệu chuyển qua từ Category
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <HeaderComponent />
      <View style={styles.imageContainer}>
        <Animated.Image
          sharedTransitionTag={item.name}
          source={item.image}
          style={[styles.image, { width: width, height: width }]}
        />
        <Text style={styles.productName}>{item.name}</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.description}>
          <Text>✅ Xem thêm Gear Tại đây 💰 Trả góp Tại đây</Text>
          <Text>🎁TĂNG Ram GEIL Super Luce Black RGB 8GB</Text>
          <Text>
            | DDR4 | 3200MHz Tại đây Giá sản phẩm có thể thay đổi theo từng thời
            điểm.
          </Text>
          <Text>
            KM MÁY BỘ STAR ĐẾN 31/12/2024 Không thay đổi linh kiện để được áp
            dụng khuyến mãi
          </Text>
          <Text>✅ không áp dụng chung Khuyến mãi khác Tại đây .</Text>
        </Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  productName: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 5,
  },
  infoSection: {
    flex: 1,
    padding: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  bottomSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  price: {
    fontSize: 28,
    fontWeight: "500",
    color: "#e45d5d",
  },
  addButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 3,
  },
  addButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
