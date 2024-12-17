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
import { ScalesProblems } from "../../../constants/ScalesProblems";
import { ScalesProblemsBasic } from "../../../constants/ScalesProblemBasic";
import shuffle from "../../../constants/Shuffle";
import ScalesProblemFunction from "../../../constants/ScalesProblemFunction";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function setProblem(currentClef, levelDeterminer) {
  if (levelDeterminer == 0) {
    var ScalesProblem = ScalesProblemFunction(ScalesProblemsBasic, currentClef);
  } else {
    var ScalesProblem = ScalesProblemFunction(ScalesProblems, currentClef);
  }
  return ScalesProblem;
}

let answerOrder = [1, 2, 3, 4];
answerOrder = shuffle(answerOrder);
let correctAnswerSpot = answerOrder.indexOf(1);

export default function ScalesStudy() {
  const { levelDeterminer } = useLocalSearchParams()

  const [text1, setText1] = useState()
  const [text2, setText2] = useState()
  const [basicCorrectLevelSpot, setBasicCorrectLevelSpot] = useState()

  let clef = useRef();
  const [isAnswerEnabled, setIsAnswerEnabled] = useState(true)
  const [ScalesStudyScore, SetScalesStudyScore] = useState(0);
  const [ScalesProblem, ResetScalesProblem] = useState(
    [, , , ,]
  );
  const [imageSource, setImageSource] = useState(null);
  useEffect(() => {
    const fetchClefAndSetProblem = async () => {
      clefVar = await AsyncStorage.getItem('Clef');
      clef.current = clefVar;
      const problem = setProblem(clef.current, levelDeterminer);
      ResetScalesProblem(problem);
      if (problem[1].includes("Major")){
        setText1(problem[1])
        setText2(problem[2])
        setBasicCorrectLevelSpot(1)
      } else {
        setText1(problem[2])
        setText2(problem[1])
        setBasicCorrectLevelSpot(2)
      }
    };

    fetchClefAndSetProblem();
  }, []);
  useEffect(() => {
    if (ScalesProblem) {
      setImageSource(ScalesProblem[0]);
    }
  }, [ScalesProblem]);
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
            style={styles.StudyScalesImage}
            source={imageSource}
          />
        </View>
        {levelDeterminer == 0 ?
          <>
            <View style={{ flex: 12 }} />
            <View style={styles.StudySection}>
              <TouchableOpacity
                disabled={!isAnswerEnabled}
                style={styles.Button}
                onPress={() => {
                  if (basicCorrectLevelSpot == 1) {
                    SetScalesStudyScore(ScalesStudyScore + 1);
                  }
                  const newProblem = setProblem(clef.current, levelDeterminer)
                  ResetScalesProblem(newProblem);
                  if (newProblem[1].includes("Major")){
                    setText1(newProblem[1])
                    setText2(newProblem[2])
                    setBasicCorrectLevelSpot(1)
                  } else {
                    setText1(newProblem[2])
                    setText2(newProblem[1])
                    setBasicCorrectLevelSpot(2)
                  }
                  disableAnswerBriefly()
                }}
              >
                <Text style={styles.Text}>{text1}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.StudySection}>
              <TouchableOpacity
                disabled={!isAnswerEnabled}
                style={styles.Button}
                onPress={() => {
                  if (basicCorrectLevelSpot == 2) {
                    SetScalesStudyScore(ScalesStudyScore + 1);
                  }
                  const newProblem = setProblem(clef.current, levelDeterminer)
                  ResetScalesProblem(newProblem);
                  if (newProblem[1].includes("Major")){
                    setText1(newProblem[1])
                    setText2(newProblem[2])
                    setBasicCorrectLevelSpot(1)
                  } else {
                    setText1(newProblem[2])
                    setText2(newProblem[1])
                    setBasicCorrectLevelSpot(2)
                  }
                  disableAnswerBriefly()
                }}
              >
                <Text style={styles.Text}>{text2}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 12 }} />
          </>
          :
          <>
            <View style={{ flex: 5 }} />
            <View style={styles.StudySection}>
              <TouchableOpacity
                disabled={!isAnswerEnabled}
                style={styles.Button}
                onPress={() => {
                  if (correctAnswerSpot == 0) {
                    SetScalesStudyScore(ScalesStudyScore + 1);
                  }
                  ResetScalesProblem(setProblem(clef.current, levelDeterminer));
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
                    SetScalesStudyScore(ScalesStudyScore + 1);
                  }
                  ResetScalesProblem(setProblem(clef.current, levelDeterminer));
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
                    SetScalesStudyScore(ScalesStudyScore + 1);
                  }
                  ResetScalesProblem(setProblem(clef.current, levelDeterminer));
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
                    SetScalesStudyScore(ScalesStudyScore + 1);
                  }
                  ResetScalesProblem(setProblem(clef.current, levelDeterminer));
                  answerOrder = shuffle(answerOrder);
                  correctAnswerSpot = answerOrder.indexOf(1);
                  disableAnswerBriefly()
                }}
              >
                <Text style={styles.Text}>{ScalesProblem[answerOrder[3]]}</Text>
              </TouchableOpacity>
            </View>
          </>
        }
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
              router.navigate("/scales/Learn");
            }}
          >
            <Text style={styles.BackText}>Learn</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 6 }}>
          <ScoreButton Score={ScalesStudyScore} />
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

  StudyScalesImage: {
    width: width,
    height: width * 97 / 431,
    alignSelf: "center",
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
