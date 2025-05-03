import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function ScoreButton({ Score, Total }) {
  return (
    <View style={styles.ScoreButton}>
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
    padding: 8,
    marginBottom: 4,
    marginRight: 4
  },
});
