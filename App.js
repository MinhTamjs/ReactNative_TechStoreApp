import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import IntroScreen from "./Apps/Screens/IntroScreens/IntroScreen";
import ScreenNavigation from "./Apps/Navigations/ScreenNavigation";

export default function App() {
  return <ScreenNavigation />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
