// screens/DetailsScreen.js
import React from "react";
import { View, Text } from "react-native";

export const DetailsScreen = ({ route }) => {
  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
};
