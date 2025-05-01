import { useCallback, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import KeysProblemFunction from "./../../../constants/KeysProblemFunction";
import { KeysProblems } from "../../../constants/KeysProblems";
import shuffle from "../../../constants/Shuffle";
import Title from "../../../components/Title";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";

function setProblem(majorOrMinorDeterminer) {
  let KeysProblem = KeysProblemFunction(KeysProblems, majorOrMinorDeterminer);
  return KeysProblem;
}

let answerOrder = [1, 2, 3, 4];
answerOrder = shuffle(answerOrder);
let correctAnswerSpot = answerOrder.indexOf(1);

export default function KeysSprint() {
  const {width, height} = useWindowDimensions();

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
    setTimeout(() => setIsAnswerEnabled(true), 700);
  }
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/SprintBackground.jpeg")}
      style={styles.container}
      blurRadius={5}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Sprint" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={{ flex: 35, justifyContent: "center" }}>
          <Image style={[styles.StudyKeysImage, {height: height * 0.25, width: height * 0.25, resizeMode: "contain"}]} source={imageSource} />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={[styles.Button, {height: height * 0.064, width: width * 3 / 5}]}
            onPress={() => {
              if (correctAnswerSpot == 0) {
                SetKeysSprintScore(KeysSprintScore + 1);
              }
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly();
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[0]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={[styles.Button, {height: height * 0.064, width: width * 3 / 5}]}
            onPress={() => {
              if (correctAnswerSpot == 1) {
                SetKeysSprintScore(KeysSprintScore + 1);
              }
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly();
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[1]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={[styles.Button, {height: height * 0.064, width: width * 3 / 5}]}
            onPress={() => {
              if (correctAnswerSpot == 2) {
                SetKeysSprintScore(KeysSprintScore + 1);
              }
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly();
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[2]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={[styles.Button, {height: height * 0.064, width: width * 3 / 5}]}
            onPress={() => {
              if (correctAnswerSpot == 3) {
                SetKeysSprintScore(KeysSprintScore + 1);
              }
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly();
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[3]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 10, justifyContent: "center" }}>
          <TouchableOpacity
            style={[styles.BackButton, {minWidth: width * 0.18, height: height * 0.053}]}
            onPress={() => {
              router.navigate({
                pathname: "/keys/DisplayScore",
                params: { KeysSprintScore, majorOrMinorDeterminer },
              });
            }}
          >
            <Text style={styles.BackText}>Finish</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 6 }}>
          <ScoreButton Score={KeysSprintScore} />
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

  StudyKeysImage: {
    alignSelf: "center",
    borderRadius: 5,
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    borderRadius: RFPercentage(2.2),
    borderWidth: 0.5,
    alignSelf: "center",
  },
});
