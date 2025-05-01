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

const levels = ["Perfect Ints", "Non-Perfect Ints", "All Intervals"]

export default function IntervalsHome() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(levels[currentLevelIndex])

  const [IntervalsHighScore, setIntervalsHighScore] = useState(0)

  useEffect(() => {
    async function checkCurrentLevel() {
      const currentIntervalsLevel = await AsyncStorage.getItem("IntervalsLevel")
      if (!currentIntervalsLevel) {
        AsyncStorage.setItem("IntervalsLevel", levels[0])
      } else {
        setCurrentLevel(currentIntervalsLevel)
        setCurrentLevelIndex(levels.indexOf(currentIntervalsLevel))
      }
    }

    checkCurrentLevel()
  }, [])

  function manageLevels() {
    setCurrentLevel(levels[currentLevelIndex])
    if (currentLevelIndex == 0){
      readScore("intervals0").then(
        (highScore) => { 
          setIntervalsHighScore(highScore);
        }
      );
    } else if (currentLevelIndex == 1){
      readScore("intervals1").then(
        (highScore) => { setIntervalsHighScore(highScore);}
      );
    } else {
      readScore("intervals2").then(
        (highScore) => { setIntervalsHighScore(highScore);}
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

  useFocusEffect(useCallback(() => {
    setCurrentLevelIndex(currentLevelIndex)
  }))
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/IntervalsBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Intervals" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.Section}>
          <HomeButton onPress={()=>router.navigate('/intervals/Learn')} text="Learn"/>
        </View>
        <View style={styles.Section}>
          <HomeButton onPress={()=>router.navigate({pathname: '/intervals/Study', params: {levelDeterminer: currentLevelIndex}})} text="Study"/>
        </View>
        <View style={styles.Section}>
          <HomeButton onPress={()=>router.navigate({pathname: '/intervals/Sprint', params: {levelDeterminer: currentLevelIndex}})} text={"Sprint\nPersonal Best: " + IntervalsHighScore}/>
        </View>
        <View style={styles.Section}>
          <HomeButton onPress={()=>{
            setCurrentLevelIndex((currentLevelIndex + 1) % 3)
            AsyncStorage.setItem("IntervalsLevel", levels[(currentLevelIndex + 1) % 3])
          }} text={"Current Level:\n" + currentLevel}/>
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
