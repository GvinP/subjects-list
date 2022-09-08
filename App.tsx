import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { Main } from "./screens/Main";
import { store } from "./store/store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Main />
        <StatusBar style="auto" />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
