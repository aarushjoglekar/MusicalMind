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
import IntervalsProblemFunction from "./../../../constants/IntervalsProblemFunction";
import { IntervalsProblems } from "../../../constants/IntervalsProblems"
import { IntervalsProblemsNonPerfect } from "../../../constants/IntervalsProblemsNonPerfect";
import { IntervalsProblemsPerfect } from "../../../constants/IntervalsProblemsPerfect";
import shuffle from "../../../constants/Shuffle";
import Title from "../../../components/Title";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CorrectOrWrong from "../../../components/CorrectOrWrong";

function setProblem(currentClef, levelDeterminer) {
  if (levelDeterminer == 0) {
    var IntervalsProblem = IntervalsProblemFunction(IntervalsProblemsPerfect, currentClef);
  } else if (levelDeterminer == 1) {
    var IntervalsProblem = IntervalsProblemFunction(IntervalsProblemsNonPerfect, currentClef);
  } else {
    var IntervalsProblem = IntervalsProblemFunction(IntervalsProblems, currentClef);
  }
  return IntervalsProblem;
}

let answerOrder = [1, 2, 3, 4];
answerOrder = shuffle(answerOrder);
let correctAnswerSpot = answerOrder.indexOf(1);

export default function IntervalsSprint() {
  const { levelDeterminer } = useLocalSearchParams()

  const LatestIntervalsSprintScoreRef = useRef()
  let clef = useRef();
  const [isAnswerEnabled, setIsAnswerEnabled] = useState(true)
  const [IntervalsSprintScore, SetIntervalsSprintScore] = useState(0);
  const [IntervalsProblem, ResetIntervalsProblem] = useState(
    [, , , ,]
  );
  const [imageSource, setImageSource] = useState(null);
  useEffect(() => {
    const fetchClefAndSetProblem = async () => {
      clefVar = await AsyncStorage.getItem('Clef');
      clef.current = clefVar;
      const problem = setProblem(clef.current, levelDeterminer);
      ResetIntervalsProblem(problem);
    };

    fetchClefAndSetProblem();
  }, []);
  useEffect(() => {
    if (IntervalsProblem) {
      setImageSource(IntervalsProblem[0]);
    }
  }, [IntervalsProblem]);

  useEffect(() => {
    LatestIntervalsSprintScoreRef.current = IntervalsSprintScore
  }, [IntervalsSprintScore]);

  useFocusEffect(
    useCallback(() => {
      const id = setTimeout(() => {
        router.navigate({
          pathname: "/intervals/DisplayScore",
          params: { IntervalsSprintScore: LatestIntervalsSprintScoreRef.current, levelDeterminer: levelDeterminer },
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
          style={styles.StudyIntervalsImage}
          source={imageSource}
        />
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 0) {
                SetIntervalsSprintScore(IntervalsSprintScore + 1);
                setIsCorrect(true)
              } else {
                setIsCorrect(false)
              }
              setTotal(prev => prev + 1)
              ResetIntervalsProblem(setProblem(clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[0]]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 1) {
                SetIntervalsSprintScore(IntervalsSprintScore + 1);
                setIsCorrect(true)
              } else {
                setIsCorrect(false)
              }
              setTotal(prev => prev + 1)
              ResetIntervalsProblem(setProblem(clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[1]]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 2) {
                SetIntervalsSprintScore(IntervalsSprintScore + 1);
                setIsCorrect(true)
              } else {
                setIsCorrect(false)
              }
              setTotal(prev => prev + 1)
              ResetIntervalsProblem(setProblem(clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[2]]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 3) {
                SetIntervalsSprintScore(IntervalsSprintScore + 1);
                setIsCorrect(true)
              } else {
                setIsCorrect(false)
              }
              setTotal(prev => prev + 1)
              ResetIntervalsProblem(setProblem(clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[3]]}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => {
            router.navigate({
              pathname: "/intervals/DisplayScore",
              params: { IntervalsSprintScore, levelDeterminer },
            });
          }}
        >
          <Text style={styles.BackText}>Finish</Text>
        </TouchableOpacity>
        <View style={{ height: 10 }} />
        <ScoreButton Score={IntervalsSprintScore} Total={total} />
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

  StudyIntervalsImage: {
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
