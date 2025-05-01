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

const levels = ["Major + Minor", "All Four"]

export default function TriadsHome() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(levels[currentLevelIndex])

  const [TriadsHighScore, setTriadsHighScore] = useState(0)

  useEffect(() => {
    async function checkCurrentLevel() {
      const currentTriadsLevel = await AsyncStorage.getItem("TriadsLevel")
      if (!currentTriadsLevel) {
        AsyncStorage.setItem("TriadsLevel", levels[0])
      } else {
        setCurrentLevel(currentTriadsLevel)
        setCurrentLevelIndex(levels.indexOf(currentTriadsLevel))
      }
    }

    checkCurrentLevel()
  }, [])

  function manageLevels() {
    setCurrentLevel(levels[currentLevelIndex])
    if (currentLevelIndex == 0) {
      readScore("triads0").then(
        (highScore) => {
          setTriadsHighScore(highScore);
        }
      );
    } else {
      readScore("triads1").then(
        (highScore) => { setTriadsHighScore(highScore); }
      );
    }
  }

  useEffect(() => {
    manageLevels()
  }, [currentLevelIndex])

  useFocusEffect(
    useCallback(() => {
      manageLevels()
    }, [])
  )

  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/TriadsBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Triads" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.Section}>
          <HomeButton onPress={() => router.navigate('/triads/Learn')} text="Learn" />
        </View>
        <View style={styles.Section}>
          <HomeButton onPress={() => router.navigate({ pathname: '/triads/Study', params: { levelDeterminer: currentLevelIndex } })} text="Study" />
        </View>
        <View style={styles.Section}>
          <HomeButton onPress={() => router.navigate({ pathname: '/triads/Sprint', params: { levelDeterminer: currentLevelIndex } })} text={"Sprint\nPersonal Best: " + TriadsHighScore} />
        </View>
        <View style={styles.Section}>
          <HomeButton onPress={() => {
            setCurrentLevelIndex((currentLevelIndex + 1) % 2)
            AsyncStorage.setItem("TriadsLevel", levels[(currentLevelIndex + 1) % 2])
          }} text={"Current Level:\n" + currentLevel} />
        </View>
        <View style={{ flex: 39 }} />
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
