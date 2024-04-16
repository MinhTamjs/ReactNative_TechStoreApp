import { View, Text, Dimensions, FlatList, Image } from "react-native";
import React, { useRef, useState, useEffect } from "react";

export default function Slider() {
  const sliderRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;
  //Data for slider images
  const sliderImageData = [
    {
      id: "1",
      image: require("./../../../assets/images/banners/slider_1.png"),
    },
    {
      id: "2",
      image: require("./../../../assets/images/banners/slider_2.png"),
    },
    {
      id: "3",
      image: require("./../../../assets/images/banners/slider_3.png"),
    },
  ];
  //Auto Slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex =
          prevIndex === sliderImageData.length - 1 ? 0 : prevIndex + 1;
        // Cập nhật FlatList
        sliderRef.current.scrollToIndex({
          index: newIndex,
          animated: true,
        });
        return newIndex;
      });
    }, 3000); // slide change per 3 sec

    return () => clearInterval(interval); // Dọn dẹp interval khi component bị unmount
  }, []);
  //Display slider images
  const renderItems = ({ item, index }) => {
    return (
      <View
        style={{
          width: screenWidth - 48,
          height: 200,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Image
          className="rounded-md"
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          source={item.image}
        />
      </View>
    );
  };
  return (
    <View className="mt-3">
      <FlatList
        ref={sliderRef}
        data={sliderImageData}
        renderItem={renderItems}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            sliderRef.current.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
