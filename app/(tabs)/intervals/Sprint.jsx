import { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import IntervalsProblemFunction from "./../../../constants/IntervalsProblemFunction";
import { IntervalsProblems } from "./../../../constants/IntervalsProblems";
import shuffle from "../../../constants/Shuffle";
import Title from "../../../components/Title";
import { router, useFocusEffect } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function setProblem(IntervalsProblems) {
  let IntervalsProblem = IntervalsProblemFunction(IntervalsProblems);
  return IntervalsProblem;
}

let answerOrder = [1, 2, 3, 4];
answerOrder = shuffle(answerOrder);
let correctAnswerSpot = answerOrder.indexOf(1);

export default function IntervalsSprint() {
  const [isAnswerEnabled, setIsAnswerEnabled] = useState(true)
  const [IntervalsSprintScore, SetIntervalsSprintScore] = useState(0);
  const [IntervalsProblem, ResetIntervalsProblem] = useState(
    IntervalsProblemFunction(IntervalsProblems)
  );
  const [imageSource, setImageSource] = useState(IntervalsProblem[0]);
  useEffect(() => {
    setImageSource(IntervalsProblem[0]);
  }, [IntervalsProblem]);
  useFocusEffect(useCallback(() => {
    let id = setTimeout(
      () =>
        router.navigate({
          pathname: "/intervals/DisplayScore",
          params: { IntervalsSprintScore },
        }),
      30000
    );
    return () => clearTimeout(id);
  }, []));
  function disableAnswerBriefly(){
    setIsAnswerEnabled(false)
    setTimeout(() => setIsAnswerEnabled(true), 700)
  }
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/SprintBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Sprint" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={{ flex: 35, justifyContent: "center" }}>
          <Image
            style={styles.StudyIntervalsImage}
            source={imageSource}
          />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 0) {
                SetIntervalsSprintScore(IntervalsSprintScore + 1);
              }
              ResetIntervalsProblem(setProblem(IntervalsProblems));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[0]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 1) {
                SetIntervalsSprintScore(IntervalsSprintScore + 1);
              }
              ResetIntervalsProblem(setProblem(IntervalsProblems));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[1]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 2) {
                SetIntervalsSprintScore(IntervalsSprintScore + 1);
              }
              ResetIntervalsProblem(setProblem(IntervalsProblems));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[2]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 3) {
                SetIntervalsSprintScore(IntervalsSprintScore + 1);
              }
              ResetIntervalsProblem(setProblem(IntervalsProblems));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[3]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 10, justifyContent: "center" }}>
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              router.navigate({
                pathname: "/intervals/DisplayScore",
                params: { IntervalsSprintScore },
              });
            }}
          >
            <Text style={styles.BackText}>Finish</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 6 }}>
          <ScoreButton Score={IntervalsSprintScore} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Button: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    width: 240,
    height: height * 0.064,
    borderRadius: 20,
    borderWidth: 0.5,
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(2),
  },

  BackText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(1.8),
  },

  StudySection: {
    flex: 12,
    justifyContent: "center",
    alignSelf: "center",
  },

  Study: {
    height: height * 0.25,
    width: height * 0.25,
    alignSelf: "center",
    borderRadius: 5,
  },

  StudyIntervalsImage: {
    width: width * 0.875,
    height: width * 0.55,
    alignSelf: 'center',
    borderRadius: 5,
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    width: width * 0.18,
    height: height * 0.053,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
  },
});
