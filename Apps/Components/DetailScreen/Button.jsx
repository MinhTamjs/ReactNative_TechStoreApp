import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Button() {
  return (
    <View style={styles.bottomSection}>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    imageContainer: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%', 
      height: undefined,
      aspectRatio: 1, 
    },
    productName: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor: 'rgba(0,0,0,0.5)',
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    price: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    addButton: {
      backgroundColor: 'red',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      elevation: 3,
    },
    addButtonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });