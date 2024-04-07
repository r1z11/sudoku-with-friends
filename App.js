import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
// import * as SplashScreen from 'expo-splash-screen';

import Game from "./screens";
import store from "./store/store";

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    "Inter-Tight-Regular": require("./assets/fonts/Inter_Tight/static/InterTight-Regular.ttf"),
    "Inter-Tight-Bold": require("./assets/fonts/Inter_Tight/static/InterTight-Bold.ttf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      {/* <View style={styles.container} onLayout={onLayoutRootView}> */}
      <View style={styles.container}>
        <Game />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
