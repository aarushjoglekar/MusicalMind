import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function HomeButton({ onPress, text, disabled = false }) {
  return (
    <TouchableOpacity disabled={disabled} style={styles.Button} onPress={onPress}>
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
    marginVertical: 17,
    alignSelf: 'center',
    minWidth: 200,
    minHeight: 56
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(2),
  },
});
