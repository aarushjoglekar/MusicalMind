import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Title from "./Title";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function DisplayScore({ scoreValue, onPress }) {
  const {width, height} = useWindowDimensions();

  return (
    <ImageBackground
      source={require("./../assets/images/BackgroundImages/DisplayScoreBackground.jpeg")}
      style={styles.container}
      blurRadius={6}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 3 }} />
        <View style={{ flex: 1.5 }}>
          <Title title="You Scored" />
        </View>
        <View style={{ flex: 5 }}>
          <Text style={styles.YouScoredNumber}>{scoreValue}</Text>
        </View>
        <View style={{ flex: 6 }} />
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={[styles.BackButton, {
              width: width * 0.18,
              height: height * 0.053
            }]}
            onPress={onPress}
          >
            <Text style={styles.Text}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5 }} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(2),
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    borderRadius: RFPercentage(2.2),
    borderWidth: 0.5,
    alignSelf: "center",
  },

  YouScoredNumber: {
    color: "#000",
    textAlign: "center",
    fontSize: 200,
    fontFamily: "PTSerif",
  },
});
