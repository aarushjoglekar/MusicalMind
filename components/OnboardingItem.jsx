import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import React, { useState } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default OnboardingItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={{
            width: width,
            height: width,
            marginBottom: 10,
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  imageContainer: {
    height: width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  title: {
    fontWeight: "800",
    fontSize: RFPercentage(3.3),
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },

  description: {
    fontSize: RFPercentage(1.5),
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
    maxWidth: width * 0.9
  },
});
