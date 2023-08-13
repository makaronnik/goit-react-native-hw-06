import "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import FlashMessage from "react-native-flash-message";
import { store, persistor } from "./store/store";
import Loader from "./components/UI/Loader";
import { showErrorMessage } from "./utils/messageHelper";
import MainNavigator from "./MainNavigator";

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (fontsError) {
    showErrorMessage(fontsError);
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            {!fontsLoaded ? <Loader /> : <MainNavigator />}
            <StatusBar style="auto" />
          </PersistGate>
        </Provider>
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
