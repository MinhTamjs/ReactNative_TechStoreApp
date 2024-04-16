import React from 'react';
import { View, Text, Image } from 'react-native';

function Detail({ route }) {
  const { item } = route.params; // Nhận dữ liệu chuyển qua từ Category

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={item.image}
        style={{ width: 200, height: 200, borderRadius: 10 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.name}</Text>
      <Text style={{ fontSize: 20 }}>{item.price}</Text>
    </View>
  );
}

export default Detail;
