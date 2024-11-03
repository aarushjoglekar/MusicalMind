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

const width = Dimensions.get("window").width;

export default function ShopItem() {
  return (
    <TouchableOpacity style={styles.ShopButton}>
      <Text style={styles.Text}>Daily Freebee</Text>
      <Image source={require("../assets/images/ShopImages/dailyFreebee.png")} style={styles.Image} />
      <View style={{ flexDirection: "row", alignSelf: 'center' }}>
        <Text style={styles.Text}>Free!</Text>
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
