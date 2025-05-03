import { useCallback, useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TriadsProblemFunction from "./../../../constants/TriadsProblemFunction";
import { TriadsProblems } from "./../../../constants/TriadsProblems";
import { TriadsProblemsBasic } from "../../../constants/TriadsProblemsBasic";
import shuffle from "../../../constants/Shuffle";
import Title from "../../../components/Title";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CorrectOrWrong from "../../../components/CorrectOrWrong";

function setProblem(currentClef, levelDeterminer) {
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


export default function TriadsSprint() {
  const { levelDeterminer } = useLocalSearchParams()

  const [text1, setText1] = useState()
  const [text2, setText2] = useState()
  const [basicCorrectLevelSpot, setBasicCorrectLevelSpot] = useState()

  const LatestTriadsSprintScoreRef = useRef()
  let clef = useRef();
  const [isAnswerEnabled, setIsAnswerEnabled] = useState(true)
  const [TriadsSprintScore, SetTriadsSprintScore] = useState(0);
  const [TriadsProblem, ResetTriadsProblem] = useState(
    [, , , ,]
  );
  const [imageSource, setImageSource] = useState(null);
  useEffect(() => {
    const fetchClefAndSetProblem = async () => {
      clefVar = await AsyncStorage.getItem('Clef');
      clef.current = clefVar;
      const problem = setProblem(clef.current, levelDeterminer);
      ResetTriadsProblem(problem);
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
    if (TriadsProblem) {
      setImageSource(TriadsProblem[0]);
    }
  }, [TriadsProblem]);

  useEffect(() => {
    LatestTriadsSprintScoreRef.current = TriadsSprintScore
  }, [TriadsSprintScore]);

  useFocusEffect(
    useCallback(() => {
      const id = setTimeout(() => {
        router.navigate({
          pathname: "/triads/DisplayScore",
          params: { TriadsSprintScore: LatestTriadsSprintScoreRef.current, levelDeterminer: levelDeterminer },
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
          style={styles.StudyTriadsImage}
          source={imageSource}
        />
        {levelDeterminer == 0 ?
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              disabled={!isAnswerEnabled}
              style={styles.Button}
              onPress={() => {
                if (basicCorrectLevelSpot == 1) {
                  SetTriadsSprintScore(TriadsSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                const newProblem = setProblem(clef.current, levelDeterminer)
                ResetTriadsProblem(newProblem);
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
              style={styles.Button}
              onPress={() => {
                if (basicCorrectLevelSpot == 2) {
                  SetTriadsSprintScore(TriadsSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                const newProblem = setProblem(clef.current, levelDeterminer)
                ResetTriadsProblem(newProblem);
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
              style={styles.Button}
              onPress={() => {
                if (correctAnswerSpot == 0) {
                  SetTriadsSprintScore(TriadsSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                ResetTriadsProblem(setProblem(clef.current, levelDeterminer));
                answerOrder = shuffle(answerOrder);
                correctAnswerSpot = answerOrder.indexOf(1);
                disableAnswerBriefly()
              }}
            >
              <Text style={styles.Text}>{TriadsProblem[answerOrder[0]]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!isAnswerEnabled}
              style={styles.Button}
              onPress={() => {
                if (correctAnswerSpot == 1) {
                  SetTriadsSprintScore(TriadsSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                ResetTriadsProblem(setProblem(clef.current, levelDeterminer));
                answerOrder = shuffle(answerOrder);
                correctAnswerSpot = answerOrder.indexOf(1);
                disableAnswerBriefly()
              }}
            >
              <Text style={styles.Text}>{TriadsProblem[answerOrder[1]]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!isAnswerEnabled}
              style={styles.Button}
              onPress={() => {
                if (correctAnswerSpot == 2) {
                  SetTriadsSprintScore(TriadsSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                ResetTriadsProblem(setProblem(clef.current, levelDeterminer));
                answerOrder = shuffle(answerOrder);
                correctAnswerSpot = answerOrder.indexOf(1);
                disableAnswerBriefly()
              }}
            >
              <Text style={styles.Text}>{TriadsProblem[answerOrder[2]]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!isAnswerEnabled}
              style={styles.Button}
              onPress={() => {
                if (correctAnswerSpot == 3) {
                  SetTriadsSprintScore(TriadsSprintScore + 1);
                  setIsCorrect(true)
                } else {
                  setIsCorrect(false)
                }
                setTotal(prev => prev + 1)
                ResetTriadsProblem(setProblem(clef.current, levelDeterminer));
                answerOrder = shuffle(answerOrder);
                correctAnswerSpot = answerOrder.indexOf(1);
                disableAnswerBriefly()
              }}
            >
              <Text style={styles.Text}>{TriadsProblem[answerOrder[3]]}</Text>
            </TouchableOpacity>
          </View>
        }
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => {
            router.navigate({
              pathname: "/triads/DisplayScore",
              params: { TriadsSprintScore, levelDeterminer },
            });
          }}
        >
          <Text style={styles.BackText}>Finish</Text>
        </TouchableOpacity>
        <View style={{ height: 10 }} />
        <ScoreButton Score={TriadsSprintScore} Total={total} />
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
    minHeight: 54,
    justifyContent: 'center',
    marginBottom: 10
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
    lignSelf: "center",
    borderRadius: 5,
    flex: 1,
    resizeMode: 'contain',
    margin: 20,
    maxWidth: "100%",
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
