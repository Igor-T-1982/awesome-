import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Navbar } from "./src/Navbar";
import { MyComponent } from "./src/PickerSelect2";
// import styles from "./src/Styles";

const App = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <View>
        <Text style={styles.text}>Калибр 5.45мм</Text>
        <MyComponent />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    width: "100%",
  },
  text: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default App;
