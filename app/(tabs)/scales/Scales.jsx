import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Title from "../../../components/Title";
import HomeButton from "../../../components/HomeButton";
import { router, useFocusEffect } from "expo-router";
import readScore from "../../../storageServices/readScore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const levels = ["Major + Nat Minor", "All Four"]

export default function ScalesHome() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(levels[currentLevelIndex])

  const [ScalesHighScore, setScalesHighScore] = useState(0)

  useEffect(() => {
    async function checkCurrentLevel() {
      const currentScalesLevel = await AsyncStorage.getItem("ScalesLevel")
      if (!currentScalesLevel) {
        AsyncStorage.setItem("ScalesLevel", levels[0])
      } else {
        setCurrentLevel(currentScalesLevel)
        setCurrentLevelIndex(levels.indexOf(currentScalesLevel))
      }
    }

    checkCurrentLevel()
  }, [])

  function manageLevels() {
    setCurrentLevel(levels[currentLevelIndex])
    if (currentLevelIndex == 0) {
      readScore("scales0").then(
        (highScore) => {
          setScalesHighScore(highScore);
        }
      );
    } else {
      readScore("scales1").then(
        (highScore) => { setScalesHighScore(highScore); }
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
      source={require("./../../../assets/images/BackgroundImages/ScalesBackground.jpeg")}
      style={styles.container}
      blurRadius={8}
    >
      <SafeAreaView style={styles.container}>
        <Title title="Scales" />
        <View style={{ height: 25 }} />
        <HomeButton onPress={() => router.navigate('/scales/Learn')} text="Learn" />
        <HomeButton onPress={() => router.navigate({ pathname: '/scales/Study', params: { levelDeterminer: currentLevelIndex } })} text="Study" />
        <HomeButton onPress={() => router.navigate({ pathname: '/scales/Sprint', params: { levelDeterminer: currentLevelIndex } })} text={"Sprint\nPersonal Best: " + ScalesHighScore} />
        <HomeButton onPress={() => {
          setCurrentLevelIndex((currentLevelIndex + 1) % 2)
          AsyncStorage.setItem("ScalesLevel", levels[(currentLevelIndex + 1) % 2])
        }} text={"Current Level:\n" + currentLevel} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Section: {
    flex: 16,
    justifyContent: "center",
    alignSelf: "center",
  },
});
