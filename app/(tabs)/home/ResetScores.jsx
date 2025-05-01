import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Alert,
  useWindowDimensions,
} from "react-native";
import React from "react";
import BackButton from "../../../components/BackButton";
import HomePageButtonSection from "../../../components/HomePageButtonSection";
import Title from "../../../components/Title";
import updateScore from "../../../storageServices/updateScore";

export default function ResetScores() {
  const {width, height} = useWindowDimensions();
  
  return (
    <ImageBackground
      source={require("./../../../assets/images//BackgroundImages/ResetScoresBackground.jpg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Reset Scores" />
        </View>
        <View style={{ flex: 20 }} />
        <HomePageButtonSection
          text="Reset Keys Score"
          onPress={() =>
            Alert.alert(
              "Resetting Keys High Score",
              "Are you sure you want to reset your personal best?",
              [
                { text: "Cancel", style: "cancel" },
                { text: "Yes", onPress: () => {
                  updateScore("keys0", 0)
                  updateScore("keys1", 0)
                  updateScore("keys2", 0)
                } },
              ]
            )
          }
        />
        <View style={{ height: 20 }} />
        <HomePageButtonSection
          text="Reset Scales Score"
          onPress={() =>
            Alert.alert(
              "Resetting Scales High Score",
              "Are you sure you want to reset your personal best?",
              [
                { text: "Cancel", style: "cancel" },
                { text: "Yes", onPress: () => {
                  updateScore("scales0", 0)
                  updateScore("scales1", 0)
                } },
              ]
            )
          }
        />
        <View style={{ height: 20 }} />
        <HomePageButtonSection
          text="Reset Intervals Score"
          onPress={() =>
            Alert.alert(
              "Resetting Intervals High Score",
              "Are you sure you want to reset your personal best?",
              [
                { text: "Cancel", style: "cancel" },
                { text: "Yes", onPress: () => {
                  updateScore("intervals0", 0)
                  updateScore("intervals1", 0)
                  updateScore("intervals2", 0)
                } },
              ]
            )
          }
        />
        <View style={{ height: 20 }} />
        <HomePageButtonSection
          text="Reset Triads Score"
          onPress={() =>
            Alert.alert(
              "Resetting Triads High Score",
              "Are you sure you want to reset your personal best?",
              [
                { text: "Cancel", style: "cancel" },
                { text: "Yes", onPress: () => {
                  updateScore("triads0", 0)
                  updateScore("triads1", 0)
                } },
              ]
            )
          }
        />
        <View style={{ height: 20 }} />
        <HomePageButtonSection
          text="Reset All Scores"
          onPress={() =>
            Alert.alert(
              "Resetting ALL High Scores",
              "Are you sure you want to reset your personal best?",
              [
                { text: "Cancel", style: "cancel" },
                { text: "Yes", onPress: () => {
                  updateScore("keys0", 0)
                  updateScore("keys1", 0)
                  updateScore("keys2", 0)
                  updateScore("scales0", 0)
                  updateScore("scales1", 0)
                  updateScore("intervals0", 0)
                  updateScore("intervals1", 0)
                  updateScore("intervals2", 0)
                  updateScore("triads0", 0)
                  updateScore("triads1", 0)
                } },
              ]
            )
          }
        />
        <View style={{ height: height * 0.1 }} />
        <BackButton />
        <View style={{ flex: 10 }} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
