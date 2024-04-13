import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={tailwind('flex-1 justify-center items-center')}
    >
      <View style={tailwind('w-full px-4')}>
        <Text style={tailwind('text-lg font-bold mb-2 text-center')}>Đăng nhập</Text>
        
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={tailwind('border border-gray-300 p-2 rounded mt-4')}
          keyboardType="email-address"
          autoCapitalize="none"
          textContentType="emailAddress"
        />
        
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="password"
          style={tailwind('border border-gray-300 p-2 rounded mt-4')}
          secureTextEntry
          textContentType="password"
        />
        
        <TouchableOpacity
          onPress={() => console.log('Đăng nhập')}
          style={tailwind('bg-blue-500 p-3 rounded mt-6')}
        >
          <Text style={tailwind('text-white text-center font-bold')}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
