import React from "react";
import { StyleSheet } from "react-native";

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#fff",
      marginTop: 50,
      marginLeft: 5,
      marginRight: 5,
      width: "100%",
    },
    box: {
      marginTop: 30,
    },

    picker_container: {
      padding: 5,
    },
    textNav: {
      padding: 5,
      color: "#000",
      textAlign: "center",
      fontSize: 20,
    },
    textApp: {
      marginBottom: 10,
      color: "#000",
      fontSize: 15,
      textDecorationLine: "underline",
      textAlign: "center",
      fontWeight: "bold",
    },

    text: {},
    button: {
      // flexDirection: "row",
    },
  });

export default styles;
