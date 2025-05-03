import { View, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, Text, useWindowDimensions } from "react-native";
import React from "react";
import Title from "../components/Title";
import { RFPercentage } from "react-native-responsive-fontsize";
import { router, useLocalSearchParams } from "expo-router";
import YoutubeIframe from "react-native-youtube-iframe";

export default function Onboarding() {
  let { isFirstTime } = useLocalSearchParams()
  let { width } = useWindowDimensions()
  return (
    <ImageBackground
      source={require("../assets/images/BackgroundImages/KeysBackground.jpeg")}
      style={styles.container}
      blurRadius={4}
    >
      <SafeAreaView style={styles.container}>
        <Title title="Tutorial" />
        <View style={{ height: 25 }} />
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <YoutubeIframe
            height={width * 9 / 16}
            videoId={"Efa_2pfmBz0"}
          />
          <TouchableOpacity style={styles.BackButton} onPress={() => { isFirstTime == "true" ? router.replace("/(tabs)/home") : router.back() }}>
            <Text style={styles.BackText}>{isFirstTime == "true" ? "Continue" : "Back"}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 10 }} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    borderRadius: RFPercentage(2.2),
    borderWidth: 0.5,
    alignSelf: "center",
    padding: 12,
  },

  BackText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(1.8),
  },
});
