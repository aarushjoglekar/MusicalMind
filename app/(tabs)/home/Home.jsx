import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import HomePageButtonSection from "../../../components/HomePageButtonSection";
import Title from "../../../components/Title";
import readDailyStreak from "../../../storageServices/readDailyStreak";
import AsyncStorage from "@react-native-async-storage/async-storage";

const height = Dimensions.get("window").height;

export default function Home() {
  const [clef, setClef] = useState();
  AsyncStorage.getItem('Clef').then((storageClef) => {
    setClef(storageClef)
  })
  const [dailyStreak, setDailyStreak] = useState();
  useFocusEffect(
    useCallback(() => {
      async function manageDailyStreak() {
        const dailyStreak = await readDailyStreak()
        setDailyStreak(dailyStreak)
      }
      manageDailyStreak()
    })
  )
  return (
    <ImageBackground
      source={require("./../../../assets/images//BackgroundImages/Theory4MusiciansBackground.jpg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Theory4Musicians" />
        </View>
        <View style={{ flex: 20 }} />
        <HomePageButtonSection
          disabled={true}
          text={`Daily Streak: ${dailyStreak}`}
        />
        <View style={{height: 40}}/>
        <HomePageButtonSection
          onPress={() => router.push("/../Onboarding")}
          text="How To Use This App"
        />
        <View style={{ height: 40 }} />
        <HomePageButtonSection
          onPress={() => router.navigate("/home/LearnToReadMusic")}
          text="Learn To Read Music"
        />
        <View style={{ height: 40 }} />
        <HomePageButtonSection
          onPress={() => router.navigate("/home/ResetScores")}
          text="Reset Scores"
        />
        <View style={{ height: 40 }} />
        <HomePageButtonSection
          onPress={() => {
            let otherClef;
            if (clef == "Treble"){
              otherClef = "Bass"
            } else {
              otherClef = "Treble"
            }
            AsyncStorage.setItem("Clef", otherClef)
            setClef(otherClef)
          }}
          text={"Toggle Clef\nCurrent Clef: " + clef}
        />

        <View style={{ height: height * 0.1 }} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
