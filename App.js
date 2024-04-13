import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import IntroScreen from './Apps/Screens/IntroScreens/IntroScreen';

export default function App() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style='auto'/>
      <IntroScreen/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
