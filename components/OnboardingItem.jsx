import { View, StyleSheet, Dimensions, Image, Text, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

export default OnboardingItem = ({ item }) => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, {height: width}]}>
        <Image
          source={item.image}
          style={{
            width: width,
            height: width,
            marginBottom: 10,
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.description, {maxWidth: width * 0.9}]}>{item.description}</Text>
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
  },
});
