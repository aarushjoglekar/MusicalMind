import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function BackButton({onButtonPress}) {
  return (
    <TouchableOpacity style={styles.BackButton} onPress={() => {router.back(), onButtonPress}}>
      <Text style={styles.Text}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(1.8),
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
