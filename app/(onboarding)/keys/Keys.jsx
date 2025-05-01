import { View, ImageBackground, StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Title from "../../../components/Title";
import HomeButton from "../../../components/HomeButton";
import { RFPercentage } from "react-native-responsive-fontsize";
import { router } from "expo-router";

export default function KeysHome() {
  const [visible, setVisible] = useState(true)

  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/KeysBackground.jpeg")}
      style={styles.container}
      blurRadius={4}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Keys" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.KeysSection}>
          <HomeButton
            disabled
            text="Learn"
          />
        </View>
        <View style={styles.KeysSection}>
          <HomeButton
            disabled
            text="Study"
          />
        </View>
        <View style={styles.KeysSection}>
          <HomeButton
            disabled
            text={"Sprint\nPersonal Best: 0"}
          />
        </View>
        <View style={styles.KeysSection}>
          <HomeButton
            disabled
            text={"Current Level:\nMajor Only"}
          />
        </View>
        <View style={{ flex: 39, justifyContent: 'flex-end' }}>
          <View style={styles.instruction}>
            <Text style={styles.text}>
              Click to grasp the new concept{'\n'}
              Click study to practice with flashcards{'\n'}
              Click sprint to take fun timed quizzes{'\n'}
              Toggle difficulty to practice specific skills
            </Text>
            <TouchableOpacity onPress={() => router.replace("../../(tabs)/home")} style={{ backgroundColor: "#EFEEEE", padding: 10, borderWidth: 1, borderRadius: 10, marginTop: 10 }}>
              <Text style={[styles.text, { fontSize: RFPercentage(1.7) }]}>I'm ready to go!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  KeysSection: {
    flex: 16,
    justifyContent: "center",
    alignSelf: "center",
  },

  instruction: {
    backgroundColor: "#eef0ff",
    padding: 15,
    borderWidth: 1.4
  },

  text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(2),
  },
});
