import {
  View,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function HeaderComponent() {
  const navigation = useNavigation();
  return (
    <View style={[style.container]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          source={require("./../../../assets/images/icons/chevron.png")}
          style={style.chevron}
        />
      </Pressable>
      <Image
        source={require("./../../../assets/images/icons/like.png")}
        style={style.chevron}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 20,
    right: 20,
    marginTop: 30,
  },
  chevron: {
    width: 44,
    height: 44,
    borderRadius: 20,
  },
});
