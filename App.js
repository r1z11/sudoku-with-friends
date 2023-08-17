import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Component } from "react";

import * as Font from "expo-font";
import { Provider } from "react-redux";

import Game from "./pages";
import store from "./store/store";

let customFonts = {
  "Inter-Tight-Regular": require("./assets/fonts/Inter_Tight/static/InterTight-Regular.ttf"),
  "Inter-Tight-Bold": require("./assets/fonts/Inter_Tight/static/InterTight-Bold.ttf"),
};

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Game />
          <StatusBar style="auto" />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
