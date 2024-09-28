import { useCallback, useEffect, useRef, useState } from "react";
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
import ScalesProblemFunction from "./../../../constants/ScalesProblemFunction";
import { ScalesProblems } from "./../../../constants/ScalesProblems";
import shuffle from "../../../constants/Shuffle";
import Title from "../../../components/Title";
import { router, useFocusEffect } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function setProblem(ScalesProblems, currentClef) {
  let ScalesProblem = ScalesProblemFunction(ScalesProblems,currentClef);
  return ScalesProblem;
}

let answerOrder = [1, 2, 3, 4];
answerOrder = shuffle(answerOrder);
let correctAnswerSpot = answerOrder.indexOf(1);

export default function ScalesSprint() {
  const LatestScalesSprintScoreRef = useRef()
  let clef;
  const [isAnswerEnabled, setIsAnswerEnabled] = useState(true)
  const [ScalesSprintScore, SetScalesSprintScore] = useState(0);
  const [ScalesProblem, ResetScalesProblem] = useState(
    [,,,,]
  );
  const [imageSource, setImageSource] = useState(null);
  useEffect(() => {
    const fetchClefAndSetProblem = async () => {
      clef = await AsyncStorage.getItem('Clef');
      const problem = setProblem(ScalesProblems, clef);
      ResetScalesProblem(problem);
    };

    fetchClefAndSetProblem();
  }, []);
  useEffect(() => {
    if (ScalesProblem){
      setImageSource(ScalesProblem[0]);
    }
  }, [ScalesProblem]);

  useEffect(() => {
    LatestScalesSprintScoreRef.current = ScalesSprintScore
  }, [ScalesSprintScore]);

  useFocusEffect(
    useCallback(() => {
      const id = setTimeout(() => {
        router.navigate({
          pathname: "/scales/DisplayScore",
          params: { ScalesSprintScore: LatestScalesSprintScoreRef.current },
        });
      }, 30000);
      return () => clearTimeout(id);
    }, [])
  );
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
            style={styles.StudyScalesImage}
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
                SetScalesSprintScore(ScalesSprintScore + 1);
              }
              ResetScalesProblem(setProblem(ScalesProblems, clef));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{ScalesProblem[answerOrder[0]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 1) {
                SetScalesSprintScore(ScalesSprintScore + 1);
              }
              ResetScalesProblem(setProblem(ScalesProblems, clef));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{ScalesProblem[answerOrder[1]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 2) {
                SetScalesSprintScore(ScalesSprintScore + 1);
              }
              ResetScalesProblem(setProblem(ScalesProblems, clef));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{ScalesProblem[answerOrder[2]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 3) {
                SetScalesSprintScore(ScalesSprintScore + 1);
              }
              ResetScalesProblem(setProblem(ScalesProblems, clef));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{ScalesProblem[answerOrder[3]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 10, justifyContent: "center" }}>
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              router.navigate({
                pathname: "/scales/DisplayScore",
                params: { ScalesSprintScore },
              });
            }}
          >
            <Text style={styles.BackText}>Finish</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 6 }}>
          <ScoreButton Score={ScalesSprintScore} />
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

  StudyScalesImage: {
    width: width,
    height: width / 7.5,
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
