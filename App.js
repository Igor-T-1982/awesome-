import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { Navbar } from "./src/Navbar";
import { MyComponent } from "./src/PickerSelect2";

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

export default App;
// App.js

// import { createStackNavigator } from "@react-navigation/stack";
// import { HomeScreen } from "./src/HomeScreen";
// import { DetailsScreen } from "./src/DetailsScreen";

// const Stack = createStackNavigator();

// export const App = () => {
//   return (
//     // <NavigationContainer>
//     //   <Stack.Navigator initialRouteName="Home">
//     //     <Stack.Screen name="Home" component={HomeScreen} />
//     //     <Stack.Screen name="Details" component={DetailsScreen} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//   );
// };

// --------------------------------------------------------------------------------

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
