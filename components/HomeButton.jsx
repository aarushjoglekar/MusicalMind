import { TouchableOpacity, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function HomeButton({ onPress, text, disabled = false }) {
  const { height } = useWindowDimensions()

  return (
    <TouchableOpacity disabled={disabled} style={[styles.Button, {minHeight: height * 0.07}]} onPress={onPress}>
      <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    borderRadius: 15,
    borderWidth: 0.5,
    marginVertical: 17,
    alignSelf: 'center',
    minWidth: "52%",
    padding: 2
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(2),
  },
});
