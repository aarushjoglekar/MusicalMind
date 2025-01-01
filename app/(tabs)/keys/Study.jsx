import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

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
    setTimeout(() => setIsAnswerEnabled(true), 700)
  }

  const [modalVisible, setModalVisible] = useState(false)
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/StudyBackground.jpeg")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <Modal
          visible={modalVisible}
          animationType="slide"
        >
          <ImageBackground style={{flex:1}} source={require("../../../assets/images/BackgroundImages/CheatSheatBackground.jpg")}>
          <BlurView style={{flex:1, width: "100%", height: "100%", position: "absolute"}} intensity={90}>
          <SafeAreaView style={{ justifyContent: 'space-between', flex: 1 }}>
              <View>
                <Title title="Cheat Sheat" />
                <Text style={[styles.Text, { textAlign: 'left', alignSelf: 'flex-start', marginHorizontal: 40, marginTop: 20 }]}>
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
              <View>
                <TouchableOpacity onPressIn={() => setModalVisible(false)} style={[styles.BackButton, { color: "grey", marginBottom: 20 }]}>
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
          <Image style={styles.StudyKeysImage} source={imageSource} />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 0) {
                SetKeysStudyScore(KeysStudyScore + 1);
              }
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[0]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 1) {
                SetKeysStudyScore(KeysStudyScore + 1);
              }
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[1]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 2) {
                SetKeysStudyScore(KeysStudyScore + 1);
              }
              ResetKeysProblem(setProblem(majorOrMinorDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{KeysProblem[answerOrder[2]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 3) {
                SetKeysStudyScore(KeysStudyScore + 1);
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
          {/* <View style={{ flex: 0.03 }} /> */}
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              router.navigate("/keys/Learn");
            }}
          >
            <Text style={styles.BackText}>Learn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.BackText}>Cheat Sheat</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 6 }}>
          <ScoreButton Score={KeysStudyScore} />
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

  StudyKeysImage: {
    height: height * 0.25,
    width: height * 0.25,
    alignSelf: "center",
    borderRadius: 5,
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    minWidth: width * 0.18,
    padding: 10,
    margin: 5,
    height: height * 0.053,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
  },
});
