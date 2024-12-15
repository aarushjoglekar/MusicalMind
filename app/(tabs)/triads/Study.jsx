import { useEffect, useRef, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
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
import Title from "../../../components/Title";
import { TriadsProblems } from "../../../constants/TriadsProblems";
import { TriadsProblemsBasic } from "../../../constants/TriadsProblemsBasic";
import shuffle from "../../../constants/Shuffle";
import TriadsProblemFunction from "../../../constants/TriadsProblemFunction";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function setProblem(TriadsProblems, currentClef, levelDeterminer) {
  if (levelDeterminer == 0) {
    var TriadsProblem = TriadsProblemFunction(TriadsProblemsBasic, currentClef);
  } else {
    var TriadsProblem = TriadsProblemFunction(TriadsProblems, currentClef);
  }
  return TriadsProblem;
}

let answerOrder = [1, 2, 3, 4];
answerOrder = shuffle(answerOrder);
let correctAnswerSpot = answerOrder.indexOf(1);

export default function TriadsStudy() {
  const { levelDeterminer } = useLocalSearchParams()

  let clef = useRef();
  const [isAnswerEnabled, setIsAnswerEnabled] = useState(true)
  const [TriadsStudyScore, SetTriadsStudyScore] = useState(0);
  const [TriadsProblem, ResetTriadsProblem] = useState(
    [, , , ,]
  );
  const [imageSource, setImageSource] = useState(null);
  useEffect(() => {
    const fetchClefAndSetProblem = async () => {
      clefVar = await AsyncStorage.getItem('Clef');
      clef.current = clefVar;
      const problem = setProblem(TriadsProblems, clef.current, levelDeterminer);
      ResetTriadsProblem(problem);
    };

    fetchClefAndSetProblem();
  }, []);
  useEffect(() => {
    if (TriadsProblem) {
      setImageSource(TriadsProblem[0]);
    }
  }, [TriadsProblem]);
  function disableAnswerBriefly() {
    setIsAnswerEnabled(false)
    setTimeout(() => setIsAnswerEnabled(true), 700)
  }
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/StudyBackground.jpeg")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Study" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={{ flex: 35, justifyContent: "center" }}>
          <Image
            style={styles.StudyTriadsImage}
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
                SetTriadsStudyScore(TriadsStudyScore + 1);
              }
              ResetTriadsProblem(setProblem(TriadsProblems, clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{TriadsProblem[answerOrder[0]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 1) {
                SetTriadsStudyScore(TriadsStudyScore + 1);
              }
              ResetTriadsProblem(setProblem(TriadsProblems, clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{TriadsProblem[answerOrder[1]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 2) {
                SetTriadsStudyScore(TriadsStudyScore + 1);
              }
              ResetTriadsProblem(setProblem(TriadsProblems, clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{TriadsProblem[answerOrder[2]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 3) {
                SetTriadsStudyScore(TriadsStudyScore + 1);
              }
              ResetTriadsProblem(setProblem(TriadsProblems, clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{TriadsProblem[answerOrder[3]]}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 10, justifyContent: "center", flexDirection: "row" }}
        >
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              router.back();
            }}
          >
            <Text style={styles.BackText}>Back</Text>
          </TouchableOpacity>
          <View style={{ flex: 0.03 }} />
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              router.navigate("/triads/Learn");
            }}
          >
            <Text style={styles.BackText}>Learn</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 6 }}>
          <ScoreButton Score={TriadsStudyScore} />
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

  StudyTriadsImage: {
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
