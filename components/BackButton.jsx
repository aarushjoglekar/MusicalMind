import { Dimensions, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function BackButton() {
  return (
    <TouchableOpacity style={styles.BackButton} onPress={() => router.back()}>
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
    width: width * 0.18,
    height: height * 0.053,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
  },
});
