import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function ScoreButton({ Score, Total }) {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.ScoreButton, {
      marginBottom: 2,
      marginRight: 2
    }]}>
      <Text style={{ alignSelf: "center", fontFamily: "Verdana", fontSize: RFPercentage(1.7) }}>
        Score: {Score + " / " + Total}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ScoreButton: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: "center",
    alignSelf: "flex-end",
    padding: 8
  },
});
