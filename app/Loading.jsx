import { useFonts } from "expo-font";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import updateDailyStreak from "../storageServices/updateDailyStreak";
import getRecentDate from "../storageServices/getRecentDate";
import getNextDay from "../storageServices/getNextDay";
import arraysEqual from "../constants/ArraysEqual"

export default function Loading() {
  const [loaded, error] = useFonts({
    Verdana: require("../assets/fonts/Verdana.ttf"),
    PTSerif: require("../assets/fonts/PTSerif-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      AsyncStorage.getItem("ViewedOnboarding").then((ViewedOnboarding) => {
        if (ViewedOnboarding == "true") {
          router.navigate("/(tabs)/home");
          const today = new Date();
          const todayArray = [
            today.getUTCMonth() + 1,
            today.getUTCDate(),
            today.getUTCFullYear(),
          ];
          getRecentDate().then((recentDate) => {
            getNextDay(recentDate).then((nextDay) => {
              if (!arraysEqual(todayArray, recentDate) && !arraysEqual(todayArray, nextDay)) {
                updateDailyStreak(0);
              }
            });
          });
        } else {
          updateDailyStreak(0).then(() => {
            router.navigate({pathname: '/Onboarding', params: {isFirstTime: "true"}});
            AsyncStorage.setItem("ViewedOnboarding", "true")
          })
        }
      })
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null;
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LottieView
        style={{ flex: 1 }}
        source={require("../constants/splash.json")}
        autoPlay
        loop
      />
    </View>
  );
}
