import { View, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Title from "../../../components/Title";
import HomeButton from "../../../components/HomeButton";
import { router, useFocusEffect } from "expo-router";
import readScore from "../../../storageServices/readScore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const levels = ["Major Only", "Minor Only", "Major + Minor"]

export default function KeysHome() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(levels[currentLevelIndex])

  const [KeysHighScore, setKeysHighScore] = useState(0)

  useEffect(() => {
    async function checkCurrentLevel() {
      const currentKeysLevel = await AsyncStorage.getItem("KeysLevel")
      if (!currentKeysLevel) {
        AsyncStorage.setItem("KeysLevel", levels[0])
      } else {
        setCurrentLevel(currentKeysLevel)
        setCurrentLevelIndex(levels.indexOf(currentKeysLevel))
      }
    }

    checkCurrentLevel()
  }, [])

  function manageLevels() {
    setCurrentLevel(levels[currentLevelIndex])
    if (currentLevelIndex == 0) {
      readScore("keys0").then(
        (highScore) => { setKeysHighScore(highScore); }
      );
    } else if (currentLevelIndex == 1) {
      readScore("keys1").then(
        (highScore) => { setKeysHighScore(highScore); }
      );
    } else {
      readScore("keys2").then(
        (highScore) => { setKeysHighScore(highScore); }
      );
    }
  }

  useEffect(() => {
    manageLevels()
  }, [currentLevelIndex])

  useFocusEffect(useCallback(() => {
    manageLevels()
  }))
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/KeysBackground.jpeg")}
      style={styles.container}
      blurRadius={4}
    >
      <SafeAreaView style={styles.container}>
        <Title title="Keys" />
        <View style={{ height: 25 }} />
        <HomeButton
          onPress={() => router.navigate("/keys/Learn")}
          text="Learn"
        />
        <HomeButton
          onPress={() => router.navigate({ pathname: "/keys/Study", params: { majorOrMinorDeterminer: currentLevelIndex } })}
          text="Study"
        />
        <HomeButton
          onPress={() => router.navigate({ pathname: "/keys/Sprint", params: { majorOrMinorDeterminer: currentLevelIndex } })}
          text={"Sprint\nPersonal Best: " + KeysHighScore}
        />
        <HomeButton
          onPress={() => {
            setCurrentLevelIndex((currentLevelIndex + 1) % 3)
            AsyncStorage.setItem("KeysLevel", levels[(currentLevelIndex + 1) % 3])
          }}
          text={"Current Level:\n" + currentLevel}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  KeysSection: {
    justifyContent: "center",
    alignSelf: "center",
  },
});
