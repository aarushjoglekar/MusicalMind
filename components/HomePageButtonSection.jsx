import { Text, StyleSheet, TouchableOpacity, Dimensions, useWindowDimensions } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function HomePageButtonSection({onPress = null, disabled = false, text}) {
  const {width, height} = useWindowDimensions();

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.HomePageButton, {width: width * 0.53, height: height * 0.07,}]}
      onPress={onPress}
    >
      <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    HomePageButton: {
      justifyContent: "center",
      alignSelf: 'center',
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