import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar />
        <View style={{ width: "100" }}>
          <Image
            source={require("./../../../assets/images/users/space.jpg")}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("./../../../assets/images/users/userDefault.png")}
            style={styles.profile}
          />
          <Text style={styles.name}> Minh Tam </Text>
        </View>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cover: {
    height: 290,
    width: "100%",
    resizeMode: "cover",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 999,
    resizeMode: "cover",
    marginTop: -90,
    borderColor: "white",
    borderWidth: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
