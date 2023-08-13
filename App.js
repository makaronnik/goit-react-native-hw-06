import "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import FlashMessage from "react-native-flash-message";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import CommentsScreen from "./screens/CommentsScreen";
import Home from "./screens/Home";
import { GoBackButton } from "./components/UI/buttons";
import MapScreen from "./screens/MapScreen";

export default function App() {
  useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const { Navigator, Screen } = createStackNavigator();

  const headerOptions = {
    headerTintColor: "#212121",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontFamily: "Roboto-Medium",
      fontSize: 17,
      lineHeight: 22,
      letterSpacing: -0.408,
      textAlign: "center",
    },
    headerStyle: {
      borderBottomColor: "rgba(189, 189, 189, 0.7)",
      borderBottomWidth: 0.8,
    },
    headerLeft: () => <GoBackButton />,
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Navigator initialRouteName="Home">
            <Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Screen
              name="CommentsScreen"
              component={CommentsScreen}
              options={{
                title: "Коментарі",
                ...headerOptions,
              }}
            />
            <Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                title: "Мапа",
                ...headerOptions,
              }}
            />
          </Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
      <FlashMessage position="top" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
