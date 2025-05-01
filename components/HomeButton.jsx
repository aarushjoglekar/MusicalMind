import { TouchableOpacity, Text, StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function HomeButton({ onPress, text, disabled = false }) {
  const { width, height} = useWindowDimensions();

  return (
    <TouchableOpacity disabled={disabled} style={[styles.Button, {width: width * 0.53, height: height * 0.065,}]} onPress={onPress}>
      <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    borderRadius: RFPercentage(2.2),
    borderWidth: 0.5,
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(2),
  },
});
