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
  useFocusEffect(useCallback(() => {
    readScore("keys").then(
      (highScore) => { setKeysHighScore(highScore) }
    );
  }, [KeysHighScore]))

  useEffect(() => {
    async function checkCurrentLevel() {
      const currentKeysLevel = await AsyncStorage.getItem("KeysLevel")
      if (!currentKeysLevel) {
        AsyncStorage.setItem("KeysLevel", "Major Only")
      } else {
        setCurrentLevel(currentKeysLevel)
        setCurrentLevelIndex(levels.indexOf(currentKeysLevel))
      }
    }

    checkCurrentLevel()
  }, [])

  useEffect(() => {
    setCurrentLevel(levels[currentLevelIndex])
  }, [currentLevelIndex])
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/KeysBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Keys" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.KeysSection}>
          <HomeButton
            onPress={() => router.navigate("/keys/Learn")}
            text="Learn"
          />
        </View>
        <View style={styles.KeysSection}>
          <HomeButton
            onPress={() => router.navigate({ pathname: "/keys/Study", params: { majorOrMinorDeterminer: currentLevelIndex } })}
            text="Study"
          />
        </View>
        <View style={styles.KeysSection}>
          <HomeButton
            onPress={() => router.navigate({ pathname: "/keys/Sprint", params: { majorOrMinorDeterminer: currentLevelIndex } })}
            text={"Sprint\nPersonal Best: " + KeysHighScore}
          />
        </View>
        <View style={styles.KeysSection}>
          <HomeButton
            onPress={() => {
              setCurrentLevelIndex((currentLevelIndex + 1) % 3)
              AsyncStorage.setItem("KeysLevel", levels[(currentLevelIndex + 1) % 3])
            }}
            text={"Current Level:\n" + currentLevel}
          />
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

  KeysSection: {
    flex: 16,
    justifyContent: "center",
    alignSelf: "center",
  },
});
