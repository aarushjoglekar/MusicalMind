import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import Title from "./Title";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function DisplayScore({ scoreValue, onPress }) {
  return (
    <ImageBackground
      source={require("./../assets/images/BackgroundImages/DisplayScoreBackground.jpeg")}
      style={styles.container}
      blurRadius={6}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.centerContent}>
            <Title title="You Scored" />
            <Text style={styles.YouScoredNumber}>{scoreValue}</Text>
          </View>
          <TouchableOpacity
            style={styles.BackButton}
            onPress={onPress}
          >
            <Text style={styles.Text}>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(1.8),
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  YouScoredNumber: {
    color: "#000",
    textAlign: "center",
    fontSize: 200,
    fontFamily: "PTSerif",
  },

  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 40,
  },
  
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
