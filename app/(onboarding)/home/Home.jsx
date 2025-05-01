import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  Text,
} from "react-native";
import React, { useCallback, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import HomePageButtonSection from "../../../components/HomePageButtonSection";
import Title from "../../../components/Title";
import readDailyStreak from "../../../storageServices/readDailyStreak";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function Home() {
  const { width, height } = useWindowDimensions();
  return (
    <ImageBackground
      source={require("./../../../assets/images//BackgroundImages/Theory4MusiciansBackground.jpg")}
      style={styles.container}
      blurRadius={6}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Theory4Musicians" />
        </View>
        <View style={{ flex: 20 }} />
        <HomePageButtonSection
          disabled={true}
          text={`Daily Streak: 0`}
        />
        <View style={{ height: 40 }} />
        <HomePageButtonSection
          disabled
          text="Tutorial"
        />
        <View style={{ height: 40 }} />
        <HomePageButtonSection
          text="Reading Music"
          disabled
        />
        <View style={{ height: 40 }} />
        <HomePageButtonSection
          text="Reset Scores"
          disabled
        />
        <View style={{ height: 40 }} />
        <HomePageButtonSection
          disabled
          text={"Toggle Clef\nCurrent Clef: Treble"}
        />
        <View style={{ height: height * 0.1, justifyContent: 'flex-end', paddingBottom: 10 }} >
          <View style={styles.instruction}>
            <Text style={styles.text}>
              Use the tab bar to try a new topic. Let's try Keys!
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  instruction: {
    backgroundColor: "#eef0ff",
    padding: 15,
    borderWidth: 1.4
  },

  text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(2),
  },
});
