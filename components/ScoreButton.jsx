import { Text, TouchableOpacity, StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function ScoreButton({ Score }) {
  const {width, height} = useWindowDimensions();

  return (
    <TouchableOpacity disabled={true} style={[styles.ScoreButton, {
      width: width * 0.23,
      height: width * 0.07,
      marginRight: width * 0.01,
    }]}>
      <Text style={{ alignSelf: "center", fontFamily: "Verdana", fontSize: RFPercentage(1.7) }}>
        Score: {Score}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ScoreButton: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: "center",
    alignSelf: "flex-end",
  },
});
