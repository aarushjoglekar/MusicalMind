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
import KeysProblemFunction from "./../../../constants/KeysProblemFunction";
import { KeysProblems } from "../../../constants/KeysProblems";
import shuffle from "../../../constants/Shuffle";
import Title from "../../../components/Title";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";
import CorrectOrWrong from "../../../components/CorrectOrWrong";

function setProblem(majorOrMinorDeterminer) {
  let KeysProblem = KeysProblemFunction(KeysProblems, majorOrMinorDeterminer);
  return KeysProblem;
}

let answerOrder = [1, 2, 3, 4];
answerOrder = shuffle(answerOrder);
let correctAnswerSpot = answerOrder.indexOf(1);

export default function KeysSprint() {
  const { majorOrMinorDeterminer } = useLocalSearchParams()

  const LatestKeysSprintScoreRef = useRef()
  const [isAnswerEnabled, setIsAnswerEnabled] = useState(true);
  const [KeysSprintScore, SetKeysSprintScore] = useState(0);
  const [KeysProblem, ResetKeysProblem] = useState(
    setProblem(majorOrMinorDeterminer)
  );
  const [imageSource, setImageSource] = useState(KeysProblem[0]);

  useEffect(() => {
    setImageSource(KeysProblem[0]);
  }, [KeysProblem]);

  useEffect(() => {
    LatestKeysSprintScoreRef.current = KeysSprintScore
  }, [KeysSprintScore]);

  useFocusEffect(
    useCallback(() => {
      const id = setTimeout(() => {
        router.navigate({
          pathname: "/keys/DisplayScore",
          params: { KeysSprintScore: LatestKeysSprintScoreRef.current, majorOrMinorDeterminer: majorOrMinorDeterminer },
        });
      }, 30000);
      return () => clearTimeout(id);
    }, [])
  );

  function disableAnswerBriefly() {
    setIsAnswerEnabled(false);
    setIsVisible(true)
    setTimeout(() => { setIsVisible(false) }, 600)
    setTimeout(() => setIsAnswerEnabled(true), 700);
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
        <Image style={styles.StudyKeysImage} source={imageSource} />
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 0) {
                SetKeysSprintScore(KeysSprintScore + 1);
                setIsCorrect(true)
              } else {
                setIsCorrect(false)
              }
              setTotal(prev => prev + 1)
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly();
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[0]]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 1) {
                SetKeysSprintScore(KeysSprintScore + 1);
                setIsCorrect(true)
              } else {
                setIsCorrect(false)
              }
              setTotal(prev => prev + 1)
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly();
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[1]]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 2) {
                SetKeysSprintScore(KeysSprintScore + 1);
                setIsCorrect(true)
              } else {
                setIsCorrect(false)
              }
              setTotal(prev => prev + 1)
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly();
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[2]]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 3) {
                SetKeysSprintScore(KeysSprintScore + 1);
                setIsCorrect(true)
              } else {
                setIsCorrect(false)
              }
              setTotal(prev => prev + 1)
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly();
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[3]]}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => {
            router.navigate({
              pathname: "/keys/DisplayScore",
              params: { KeysSprintScore, majorOrMinorDeterminer },
            });
          }}
        >
          <Text style={styles.BackText}>Finish</Text>
        </TouchableOpacity>
        <View style={{ height: 10 }} />
        <ScoreButton Score={KeysSprintScore} Total={total} />
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

  StudyKeysImage: {
    lignSelf: "center",
    borderRadius: 5,
    flex: 1,
    resizeMode: 'contain',
    margin: 20,
    maxWidth: "100%"
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
