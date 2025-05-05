import { useCallback, useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import ScalesProblemFunction from "./../../../constants/ScalesProblemFunction";
import { ScalesProblems } from "./../../../constants/ScalesProblems";
import { ScalesProblemsBasic } from "../../../constants/ScalesProblemBasic";
import shuffle from "../../../constants/Shuffle";
import Title from "../../../components/Title";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CorrectOrWrong from "../../../components/CorrectOrWrong";

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

export default function ScalesSprint() {
  const {width, height} = useWindowDimensions()

  const { levelDeterminer } = useLocalSearchParams()

  const [text1, setText1] = useState()
  const [text2, setText2] = useState()
  const [basicCorrectLevelSpot, setBasicCorrectLevelSpot] = useState()

  const LatestScalesSprintScoreRef = useRef()
  let clef = useRef()
  const [isAnswerEnabled, setIsAnswerEnabled] = useState(true)
  const [ScalesSprintScore, SetScalesSprintScore] = useState(0);
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
      if (problem[1].includes("Major")) {
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

  useEffect(() => {
    LatestScalesSprintScoreRef.current = ScalesSprintScore
  }, [ScalesSprintScore]);

  useFocusEffect(
    useCallback(() => {
      const id = setTimeout(() => {
        router.navigate({
          pathname: "/scales/DisplayScore",
          params: { ScalesSprintScore: LatestScalesSprintScoreRef.current, levelDeterminer: levelDeterminer },
        });
      }, 30000);
      return () => clearTimeout(id);
    }, [])
  );
  function disableAnswerBriefly() {
    setIsAnswerEnabled(false)
    setIsVisible(true)
    setTimeout(() => { setIsVisible(false) }, 600)
    setTimeout(() => setIsAnswerEnabled(true), 700)
  }

  const [isCorrect, setIsCorrect] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const [total, setTotal] = useState(0)
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/SprintBackground.jpeg")}
      style={styles.container}
      blurRadius={5}
    >
      <SafeAreaView style={styles.container}>
        <CorrectOrWrong isCorrect={isCorrect} isVisible={isVisible} />
        <Title title="Sprint" />
        <Image
          style={styles.StudyScalesImage}
          source={imageSource}
        />
        {levelDeterminer == 0 ?
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              disabled={!isAnswerEnabled}
              style={[styles.Button, {minHeight: height * 0.06, minWidth: width* 0.55, marginBottom: height * 0.01}]}
              onPress={() => {
                if (basicCorrectLevelSpot == 1) {
                  SetScalesSprintScore(ScalesSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                const newProblem = setProblem(clef.current, levelDeterminer)
                ResetScalesProblem(newProblem);
                if (newProblem[1].includes("Major")) {
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
            <TouchableOpacity
              disabled={!isAnswerEnabled}
              style={[styles.Button, {minHeight: height * 0.06, minWidth: width* 0.55, marginBottom: height * 0.01}]}
              onPress={() => {
                if (basicCorrectLevelSpot == 2) {
                  SetScalesSprintScore(ScalesSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                const newProblem = setProblem(clef.current, levelDeterminer)
                ResetScalesProblem(newProblem);
                if (newProblem[1].includes("Major")) {
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
          :
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              disabled={!isAnswerEnabled}
              style={[styles.Button, {minHeight: height * 0.06, minWidth: width* 0.55, marginBottom: height * 0.01}]}
              onPress={() => {
                if (correctAnswerSpot == 0) {
                  SetScalesSprintScore(ScalesSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                ResetScalesProblem(setProblem(clef.current, levelDeterminer));
                answerOrder = shuffle(answerOrder);
                correctAnswerSpot = answerOrder.indexOf(1);
                disableAnswerBriefly()
              }}
            >
              <Text style={styles.Text}>{ScalesProblem[answerOrder[0]]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!isAnswerEnabled}
              style={[styles.Button, {minHeight: height * 0.06, minWidth: width* 0.55, marginBottom: height * 0.01}]}
              onPress={() => {
                if (correctAnswerSpot == 1) {
                  SetScalesSprintScore(ScalesSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                ResetScalesProblem(setProblem(clef.current, levelDeterminer));
                answerOrder = shuffle(answerOrder);
                correctAnswerSpot = answerOrder.indexOf(1);
                disableAnswerBriefly()
              }}
            >
              <Text style={styles.Text}>{ScalesProblem[answerOrder[1]]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!isAnswerEnabled}
              style={[styles.Button, {minHeight: height * 0.06, minWidth: width* 0.55, marginBottom: height * 0.01}]}
              onPress={() => {
                if (correctAnswerSpot == 2) {
                  SetScalesSprintScore(ScalesSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                ResetScalesProblem(setProblem(clef.current, levelDeterminer));
                answerOrder = shuffle(answerOrder);
                correctAnswerSpot = answerOrder.indexOf(1);
                disableAnswerBriefly()
              }}
            >
              <Text style={styles.Text}>{ScalesProblem[answerOrder[2]]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!isAnswerEnabled}
              style={[styles.Button, {minHeight: height * 0.06, minWidth: width* 0.55, marginBottom: height * 0.01}]}
              onPress={() => {
                if (correctAnswerSpot == 3) {
                  SetScalesSprintScore(ScalesSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                ResetScalesProblem(setProblem(clef.current, levelDeterminer));
                answerOrder = shuffle(answerOrder);
                correctAnswerSpot = answerOrder.indexOf(1);
                disableAnswerBriefly()
              }}
            >
              <Text style={styles.Text}>{ScalesProblem[answerOrder[3]]}</Text>
            </TouchableOpacity>
          </View>
        }
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => {
            router.navigate({
              pathname: "/scales/DisplayScore",
              params: { ScalesSprintScore, levelDeterminer },
            });
          }}
        >
          <Text style={styles.BackText}>Finish</Text>
        </TouchableOpacity>
        <View style={{ height: 10 }} />
        <ScoreButton Score={ScalesSprintScore} Total={total} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Button: {
    backgroundColor: "#edebeb",
    borderRadius: 20,
    borderWidth: 0.5,
    minWidth: 225,
    padding: 10,
    justifyContent: 'center',
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
    alignSelf: "center",
    borderRadius: 5,
    flex: 1,
    resizeMode: 'contain',
    marginVertical: 20,
    width: "100%",
    height: "100%"
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    borderRadius: RFPercentage(2.2),
    borderWidth: 0.5,
    alignSelf: "center",
    padding: 12,
  },
});
