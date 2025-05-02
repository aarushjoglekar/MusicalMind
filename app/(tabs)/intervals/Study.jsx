import { useEffect, useRef, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Title from "../../../components/Title";
import { IntervalsProblems } from "../../../constants/IntervalsProblems"
import { IntervalsProblemsNonPerfect } from "../../../constants/IntervalsProblemsNonPerfect";
import { IntervalsProblemsPerfect } from "../../../constants/IntervalsProblemsPerfect";
import shuffle from "../../../constants/Shuffle";
import IntervalsProblemFunction from "../../../constants/IntervalsProblemFunction";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BlurView } from "expo-blur";
import { AntDesign } from "@expo/vector-icons";
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

export default function IntervalsStudy() {
  const {width, height} = useWindowDimensions();

  const { levelDeterminer } = useLocalSearchParams()

  let clef = useRef()
  const [isAnswerEnabled, setIsAnswerEnabled] = useState(true)
  const [IntervalsStudyScore, SetIntervalsStudyScore] = useState(0);
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
  function disableAnswerBriefly() {
    setIsAnswerEnabled(false)
    setIsVisible(true)
    setTimeout(() => {setIsVisible(false)}, 600)
    setTimeout(() => setIsAnswerEnabled(true), 700)
  }

  const [modalVisible, setModalVisible] = useState(false)
  const [isNearBottom, setIsNearBottom] = useState(false)

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    if (isCloseToBottom) {
      setIsNearBottom(0);
    } else {
      setIsNearBottom(100);
    }
  };

  const [total, setTotal] = useState(0)

  const [isCorrect, setIsCorrect] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/StudyBackground.jpeg")}
      style={{ flex: 1 }}
      blurRadius={9}
    >
      <SafeAreaView style={styles.container}>
      <CorrectOrWrong isCorrect={isCorrect} isVisible={isVisible}/>
      <Modal
          visible={modalVisible}
          animationType="fade"
        >
          <ImageBackground style={{ flex: 1 }} source={require("../../../assets/images/BackgroundImages/CheatSheatBackground.jpg")}>
            <BlurView style={{ flex: 1, width: "100%", height: "100%", position: "absolute" }} intensity={90}>
              <SafeAreaView style={{ justifyContent: 'space-between', flex: 1 }}>
                <Title title="Cheat Sheet" />
                <ScrollView style={{ flex: 1 }} onScroll={handleScroll}>
                  <View style={{ backgroundColor: "#edebeb", borderRadius: 30, margin: 30, padding: 10 }}>
                    <Text style={[styles.Text, { textAlign: 'left', alignSelf: 'flex-start', marginHorizontal: 40 }]}>
                      <Text style={{ fontStyle: 'italic' }}>{"Perfect Intervals:"}</Text>
                      <Text>{"\n\u2022"} 4ths, 5ths, and 8ths are Perfect Intervals</Text>
                      <Text>{"\n\u2022"} If the quality is perfect, the top note will be a part of the root note's Major scale</Text>
                      <Text>{"\n\u2022"} If the quality is diminished, the top note will be one half step lower than the note in the root note's Major scale</Text>
                      <Text>{"\n\u2022"} If the quality is augmented, the top note will be one half step higher than the note in the root note's Major scale</Text>
                    </Text>
                    <Text style={[styles.Text, { textAlign: 'left', alignSelf: 'flex-start', marginHorizontal: 40 }]}>
                      <Text style={{ fontStyle: 'italic' }}>{"\nNon-Perfect Intervals:"}</Text>
                      <Text>{"\n\u2022"} 2nds, 3rds, 6ths, and 7ths are Non-Perfect Intervals</Text>
                      <Text>{"\n\u2022"} If the quality is major, the top note will be a part of the root note's Major scale</Text>
                      <Text>{"\n\u2022"} If the quality is minor, the top note will be one half step lower than the note in the root note's Major scale</Text>
                      <Text>{"\n\u2022"} If the quality is diminished, the top note will be two half steps (or one whole step) lower than the note in the root note's Major scale</Text>
                      <Text>{"\n\u2022"} If the quality is augmented, the top note will be one half steps higher than the note in the root note's Major scale</Text>
                    </Text>
                  </View>
                </ScrollView>
                <View style={{ flex: 0.1, justifyContent: "center" }}>
                  <AntDesign
                    name="caretdown"
                    size={30}
                    color="#4d4d4d"
                    style={{ alignSelf: "center", opacity: isNearBottom }}
                  />
                </View>
                <View>
                  <TouchableOpacity onPressIn={() => setModalVisible(false)} style={[styles.BackButton, { color: "grey", marginBottom: 20, minWidth: width * 0.18, height: height * 0.053 }]}>
                    <Text style={styles.Text}>
                      Hide
                    </Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </BlurView>
          </ImageBackground>
        </Modal>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Study" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={{ flex: 35, justifyContent: "center" }}>
          <Image
            style={[styles.StudyIntervalsImage, {width: width * 0.875, height: width * 0.55, resizeMode: "contain"}]}
            source={imageSource}
          />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={[styles.Button, {height: height * 0.064, width: width * 3 / 5}]}
            onPress={() => {
              if (correctAnswerSpot == 0) {
                SetIntervalsStudyScore(IntervalsStudyScore + 1);
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
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={[styles.Button, {height: height * 0.064, width: width * 3 / 5}]}
            onPress={() => {
              if (correctAnswerSpot == 1) {
                SetIntervalsStudyScore(IntervalsStudyScore + 1);
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
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={[styles.Button, {height: height * 0.064, width: width * 3 / 5}]}
            onPress={() => {
              if (correctAnswerSpot == 2) {
                SetIntervalsStudyScore(IntervalsStudyScore + 1);
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
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={[styles.Button, {height: height * 0.064, width: width * 3 / 5}]}
            onPress={() => {
              if (correctAnswerSpot == 3) {
                SetIntervalsStudyScore(IntervalsStudyScore + 1);
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
              router.navigate("/intervals/Learn");
            }}
          >
            <Text style={styles.BackText}>Learn</Text>
          </TouchableOpacity>
          <View style={{ flex: 0.03 }} />
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.BackText}>Cheat Sheet</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 6 }}>
          <ScoreButton Score={IntervalsStudyScore} Total={total}/>
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

  StudyIntervalsImage: {
    alignSelf: 'center',
    borderRadius: 5,
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    borderRadius: RFPercentage(2.2),
    borderWidth: 0.5,
    alignSelf: "center",
    padding: 12
  },
});
