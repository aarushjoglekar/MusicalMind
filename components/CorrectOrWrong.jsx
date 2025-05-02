import { Image, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";

export default function CorrectOrWrong({ isCorrect, isVisible }) {
  const { width, height } = useWindowDimensions();

  let correctSource = require("../assets/images/correct.png")
  let incorrectSource = require("../assets/images/incorrect.png")

  return (
    <Image style={[styles.image, {opacity: isVisible ? 100 : 0}]} source={isCorrect ? correctSource : incorrectSource}/>
  );
}

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    width: 60,
    height: 60,
    position: 'absolute',
    top: "10%",
    right: "10%",
  },
});
