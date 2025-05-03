import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useCallback, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import Title from "../../../components/Title";
import readDailyStreak from "../../../storageServices/readDailyStreak";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeButton from "../../../components/HomeButton";

export default function Home() {
  const [clef, setClef] = useState();
  AsyncStorage.getItem('Clef').then((storageClef) => {
    if (storageClef == null) {
      setClef("Treble")
      AsyncStorage.setItem('Clef', "Treble")
    } else {
      setClef(storageClef)
    }
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
      blurRadius={6}
    >
      <SafeAreaView style={styles.container}>
        <Title title="Theory4Musicians" />
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <HomeButton
            disabled={true}
            text={`Daily Streak: ${dailyStreak}`}
          />
          <HomeButton
            onPress={() => router.push("../../(onboarding)/home")}
            text="Tutorial"
          />
          <HomeButton
            onPress={() => router.navigate("/home/LearnToReadMusic")}
            text="Reading Music"
          />
          <HomeButton
            onPress={() => router.navigate("/home/ResetScores")}
            text="Reset Scores"
          />
          <HomeButton
            onPress={() => {
              let otherClef;
              if (clef == "Treble") {
                otherClef = "Bass"
              } else {
                otherClef = "Treble"
              }
              AsyncStorage.setItem("Clef", otherClef)
              setClef(otherClef)
            }}
            text={"Toggle Clef\nCurrent Clef: " + clef}
          />
        </View>
        <View style={{height:80}}/>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
