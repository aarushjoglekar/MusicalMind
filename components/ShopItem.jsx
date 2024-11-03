import {
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import Note from "./Note";

const width = Dimensions.get("window").width;

export default function ShopItem({ onPress, text, imageSource, cost }) {
  return (
    <TouchableOpacity style={styles.ShopButton} onPress={onPress}>
      <Text style={styles.Text}>{text}</Text>
      <Image source={imageSource} style={styles.Image} />
      <View style={{ flexDirection: "row", alignSelf: 'center' }}>
        <Text style={styles.Text}>{cost}</Text>
        <Note size={20}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(1.8),
  },

  ShopButton: {
    justifyContent: "space-evenly",
    backgroundColor: "#edebeb",
    width: width * 0.35,
    height: width * 0.4,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: "center",
  },

  Image: {
    width: width * 0.25,
    height: width * 0.25,
    alignSelf: "center",
  },
});
