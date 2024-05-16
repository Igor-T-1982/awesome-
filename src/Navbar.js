import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = (props) => {
  return (
    <View style={styles.box}>
      <Text style={styles.textNav}>ВАА-РГх ОРКИ ВПЕРЕД</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    marginBottom: 10,
    marginRight: 10,
  },
  textNav: {
    padding: 5,
    backgroundColor: "rgb(8, 22, 49)",
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
});
