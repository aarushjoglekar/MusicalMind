import { useEffect, useRef, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ScrollView
} from "react-native";
import Title from "../../../components/Title";
import { ScalesProblems } from "../../../constants/ScalesProblems";
import { ScalesProblemsBasic } from "../../../constants/ScalesProblemBasic";
import shuffle from "../../../constants/Shuffle";
import ScalesProblemFunction from "../../../constants/ScalesProblemFunction";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BlurView } from "expo-blur";
import { AntDesign } from "@expo/vector-icons";
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
  function disableAnswerBriefly() {
    setIsAnswerEnabled(false)
    setIsVisible(true)
    setTimeout(() => { setIsVisible(false) }, 600)
    setTimeout(() => setIsAnswerEnabled(true), 700)
  }


  const [isNearBottom, setIsNearBottom] = useState(100);
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
  const [modalVisible, setModalVisible] = useState(false)

  const [total, setTotal] = useState(0)

  const [isCorrect, setIsCorrect] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/StudyBackground.jpeg")}
      style={styles.container}
      blurRadius={9}
    >
      <SafeAreaView style={styles.container}>
        <CorrectOrWrong isCorrect={isCorrect} isVisible={isVisible} />
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
                      <Text style={{ fontStyle: 'italic' }}>{"\u2022 Identifying a Major Scale:"}</Text>
                      <Text>{'\n'}{'\t'}Check if the key signature of the tonic note matches the accidentals in the scale</Text>
                      <Text>{'\n'}{'\t'}Check if the distances between notes (half steps/whole steps) matches WWHWWWH</Text>
                    </Text>
                    <Text style={[styles.Text, { textAlign: 'left', alignSelf: 'flex-start', marginHorizontal: 40, marginTop: 20 }]}>
                      <Text style={{ fontStyle: 'italic' }}>{"\u2022 Identifying a Natural Minor Scale:"}</Text>
                      <Text>{'\n'}{'\t'}Check if the key signature of the tonic note's relative major matches the accidentals in the scale</Text>
                      <Text>{'\n'}{'\t'}Identify what the tonic note's major scale should look like and lower the third, sixth, and seventh note a half step</Text>
                      <Text>{'\n'}{'\t'}Check if the distances between notes (half steps/whole steps) matches WHWWHWW</Text>
                    </Text>
                    <Text style={[styles.Text, { textAlign: 'left', alignSelf: 'flex-start', marginHorizontal: 40, marginTop: 20 }]}>
                      <Text style={{ fontStyle: 'italic' }}>{"\u2022 Identifying a Harmonic Minor Scale: "}</Text>
                      <Text>{'\n'}{'\t'}Identify the major scale and lower the third and sixth note a half step (raise the seventh note a half step in the natural minor scale)</Text>
                      <Text>{'\n'}{'\t'}Check if the distances between notes (half steps/whole steps) is WHWWH(3 Half Steps)H</Text>
                    </Text>
                    <Text style={[styles.Text, { textAlign: 'left', alignSelf: 'flex-start', marginHorizontal: 40, marginTop: 20 }]}>
                      <Text style={{ fontStyle: 'italic' }}>{"\u2022 Identifying a Melodic Minor Scale: "}</Text>
                      <Text>{'\n'}{'\t'}Identify the major scale and lower the third note a half step</Text>
                      <Text>{'\n'}{'\t'}Check if the distances between notes (half steps/whole steps) is WHWWWWH</Text>
                    </Text>
                  </View>
                </ScrollView>
                <View style={{ marginVertical: 5, justifyContent: "center" }}>
                  <AntDesign
                    name="caretdown"
                    size={30}
                    color="#4d4d4d"
                    style={{ alignSelf: "center", opacity: isNearBottom }}
                  />
                </View>
                <View>
                  <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.BackButton}>
                    <Text style={styles.Text}>
                      Hide
                    </Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </BlurView>
          </ImageBackground>
        </Modal>
        <Title title="Study" />
        <Image
          style={styles.StudyScalesImage}
          source={imageSource}
        />
        {levelDeterminer == 0 ?
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              disabled={!isAnswerEnabled}
              style={styles.Button}
              onPress={() => {
                if (basicCorrectLevelSpot == 1) {
                  SetScalesStudyScore(ScalesStudyScore + 1);
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
              style={styles.Button}
              onPress={() => {
                if (basicCorrectLevelSpot == 2) {
                  SetScalesStudyScore(ScalesStudyScore + 1);
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
              style={styles.Button}
              onPress={() => {
                if (correctAnswerSpot == 0) {
                  SetScalesStudyScore(ScalesStudyScore + 1);
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
              style={styles.Button}
              onPress={() => {
                if (correctAnswerSpot == 1) {
                  SetScalesStudyScore(ScalesStudyScore + 1);
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
              style={styles.Button}
              onPress={() => {
                if (correctAnswerSpot == 2) {
                  SetScalesStudyScore(ScalesStudyScore + 1);
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
              style={styles.Button}
              onPress={() => {
                if (correctAnswerSpot == 3) {
                  SetScalesStudyScore(ScalesStudyScore + 1);
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
        <View
          style={{ justifyContent: "center", flexDirection: "row" }}
        >
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              router.back();
            }}
          >
            <Text style={styles.BackText}>Back</Text>
          </TouchableOpacity>
          <View style={{ width: 6 }} />
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              router.navigate("/scales/Learn");
            }}
          >
            <Text style={styles.BackText}>Learn</Text>
          </TouchableOpacity>
          <View style={{ width: 6 }} />
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              setModalVisible(true);
              setIsNearBottom(100)
            }}
          >
            <Text style={styles.BackText}>Cheat Sheet</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 10 }} />
        <ScoreButton Score={ScalesStudyScore} Total={total} />
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
    padding: 12
  },
});
