import { useEffect, useState } from "react";
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
  View,
} from "react-native";
import Title from "../../../components/Title";
import { KeysProblems } from "../../../constants/KeysProblems";
import shuffle from "../../../constants/Shuffle";
import KeysProblemFunction from "./../../../constants/KeysProblemFunction";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";
import { BlurView } from "expo-blur";
import { AntDesign } from "@expo/vector-icons";
import CorrectOrWrong from "../../../components/CorrectOrWrong"

function setProblem(majorOrMinorDeterminer) {
  let KeysProblem = KeysProblemFunction(KeysProblems, majorOrMinorDeterminer);
  return KeysProblem;
}

let answerOrder = [1, 2, 3, 4];
answerOrder = shuffle(answerOrder);
let correctAnswerSpot = answerOrder.indexOf(1);

export default function KeysStudy() {
  const { majorOrMinorDeterminer } = useLocalSearchParams()

  const [isAnswerEnabled, setIsAnswerEnabled] = useState(true)
  const [KeysStudyScore, SetKeysStudyScore] = useState(0);
  const [KeysProblem, ResetKeysProblem] = useState(
    setProblem(majorOrMinorDeterminer)
  );
  const [imageSource, setImageSource] = useState(KeysProblem[0]);
  useEffect(() => {
    setImageSource(KeysProblem[0]);
  }, [KeysProblem]);
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
                      <Text style={{ fontStyle: 'italic' }}>{"\u2022 Major Key from a Key Signature With Sharps:"}</Text>
                      <Text> Raise the last Sharp by a Half Step</Text>
                    </Text>
                    <Text style={[styles.Text, { textAlign: 'left', alignSelf: 'flex-start', marginHorizontal: 40, marginTop: 20 }]}>
                      <Text style={{ fontStyle: 'italic' }}>{"\u2022 Major Key from a Key Signature With Flats:"}</Text>
                      <Text> Identify the Second Last Flat</Text>
                    </Text>
                    <Text style={[styles.Text, { textAlign: 'left', alignSelf: 'flex-start', marginHorizontal: 40, marginTop: 20 }]}>
                      <Text style={{ fontStyle: 'italic' }}>{"\u2022 Find the Relative Minor Key from the Major Key: "}</Text>
                      <Text>
                        Go Down Three Half Steps while Maintaining the Two Letter Distance (to keep the interval a third)
                      </Text>
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
        <Image style={styles.StudyKeysImage} source={imageSource} />
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 0) {
                SetKeysStudyScore(KeysStudyScore + 1);
                setIsCorrect(true)
              } else {
                setIsCorrect(false)
              }
              setTotal(prev => prev + 1)
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[0]]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 1) {
                SetKeysStudyScore(KeysStudyScore + 1);
                setIsCorrect(true)
              } else {
                setIsCorrect(false)
              }
              setTotal(prev => prev + 1)
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[1]]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 2) {
                SetKeysStudyScore(KeysStudyScore + 1);
                setIsCorrect(true)
              } else {
                setIsCorrect(false)
              }
              setTotal(prev => prev + 1)
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[2]]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 3) {
                SetKeysStudyScore(KeysStudyScore + 1);
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
              router.navigate("/keys/Learn");
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
        <ScoreButton Score={KeysStudyScore} Total={total} />
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
