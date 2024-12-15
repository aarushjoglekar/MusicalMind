import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import DisplayScore from "../../../components/DisplayScore";
import readScore from "../../../storageServices/readScore";
import updateScore from "../../../storageServices/updateScore";
import readDailyStreak from "../../../storageServices/readDailyStreak";
import updateDailyStreak from "../../../storageServices/updateDailyStreak";
import setRecentDate from "../../../storageServices/setRecentDate";
import getNextDay from "../../../storageServices/getNextDay";
import getRecentDate from "../../../storageServices/getRecentDate";
import arraysEqual from "../../../constants/ArraysEqual";

export default function KeysDisplayScore() {
  const { KeysSprintScore, majorOrMinorDeterminer } = useLocalSearchParams();
  let certainHighScoreKey = "keys" + majorOrMinorDeterminer
  console.log(certainHighScoreKey)
  readScore(certainHighScoreKey).then( (highScore)=>{
    if (JSON.parse(KeysSprintScore) > highScore){
      updateScore(certainHighScoreKey, KeysSprintScore)
    }
  });
  readDailyStreak().then((streak) => {
    let today = new Date()
    getRecentDate().then((recentDate) => {
      getNextDay(recentDate).then((nextDay) => {
        if (streak == 0){
          updateDailyStreak(1)
          setRecentDate();
        } else if (arraysEqual([today.getUTCMonth() + 1, today.getUTCDate(), today.getUTCFullYear()], nextDay)){
          updateDailyStreak(streak + 1)
          setRecentDate();
        }
      })
    })
  })
  return (
    <DisplayScore scoreValue={KeysSprintScore} onPress={()=>router.navigate('/keys/Keys')}/>
  )
}