import { useCallback, useEffect, useRef, useState } from "react";
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
import TriadsProblemFunction from "./../../../constants/TriadsProblemFunction";
import { TriadsProblems } from "./../../../constants/TriadsProblems";
import { TriadsProblemsBasic } from "../../../constants/TriadsProblemsBasic";
import shuffle from "../../../constants/Shuffle";
import Title from "../../../components/Title";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function setProblem(TriadsProblems, currentClef, levelDeterminer) {
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

  const LatestTriadsSprintScoreRef = useRef()
  let clef = useRef();
  const [isAnswerEnabled, setIsAnswerEnabled] = useState(true)
  const [TriadsSprintScore, SetTriadsSprintScore] = useState(0);
  const [TriadsProblem, ResetTriadsProblem] = useState(
    [,,,,]
  );
  const [imageSource, setImageSource] = useState(null);
  useEffect(() => {
    const fetchClefAndSetProblem = async () => {
      clefVar = await AsyncStorage.getItem('Clef');
      clef.current = clefVar;
      const problem = setProblem(TriadsProblems, clef.current, levelDeterminer);
      ResetTriadsProblem(problem);
    };

    fetchClefAndSetProblem();
  }, []);
  useEffect(() => {
    if (TriadsProblem){
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

  function disableAnswerBriefly(){ 
    setIsAnswerEnabled(false)
    setTimeout(() => setIsAnswerEnabled(true), 700)
  }
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/SprintBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Sprint" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={{ flex: 35, justifyContent: "center" }}>
          <Image
            style={styles.StudyTriadsImage}
            source={imageSource}
          />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 0) {
                SetTriadsSprintScore(TriadsSprintScore + 1);
              }
              ResetTriadsProblem(setProblem(TriadsProblems, clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{TriadsProblem[answerOrder[0]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 1) {
                SetTriadsSprintScore(TriadsSprintScore + 1);
              }
              ResetTriadsProblem(setProblem(TriadsProblems, clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{TriadsProblem[answerOrder[1]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 2) {
                SetTriadsSprintScore(TriadsSprintScore + 1);
              }
              ResetTriadsProblem(setProblem(TriadsProblems, clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{TriadsProblem[answerOrder[2]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            disabled={!isAnswerEnabled}
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 3) {
                SetTriadsSprintScore(TriadsSprintScore + 1);
              }
              ResetTriadsProblem(setProblem(TriadsProblems, clef.current, levelDeterminer));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
              disableAnswerBriefly()
            }}
          >
            <Text style={styles.Text}>{TriadsProblem[answerOrder[3]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 10, justifyContent: "center" }}>
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
        </View>
        <View style={{ flex: 6 }}>
          <ScoreButton Score={TriadsSprintScore} />
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

  Study: {
    height: height * 0.25,
    width: height * 0.25,
    alignSelf: "center",
    borderRadius: 5,
  },

  StudyTriadsImage: {
    width: width * 0.875,
    height: width * 0.55,
    alignSelf: 'center',
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
