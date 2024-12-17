import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Title from "../../../components/Title";
import BackButton from "../../../components/BackButton";
import { RFPercentage } from "react-native-responsive-fontsize";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

export default function ScalesLearn() {
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
  return (
    <ImageBackground
      source={require("../../../assets/images/BackgroundImages/TextBackground.jpeg")}
      style={{ flex: 1, padding: 50 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
        >
          <Title title="Scales" />
          <Text style={styles.Subtitle}>{"\n"}What are Scales</Text>
          <Text style={styles.LearnText}>
            {"\t"}A scale is a series of notes that go in ascending or
            descending order. It is important to be aware of and practice scales
            as when you see them in a composition, it will be easy to recognize
            them, and in turn playing them will be simpler. In addition, scales
            are the building blocks to music, and mixing scales in a piece can
            add a variety of flavors to the composition.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}How to Identify the Tonic Note
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}To name a scale, you must identify the note the scale belongs
            to (the tonic note), and the quality of the scale. An example of
            this would be an A Major scale, or an f# minor scale. To identify
            the tonic note, you must identify the first note of the scale. For
            example an A Major scale would begin on the note A. (Keep in mind
            that a scale doesn't actually have to start on the tonic note.
            However if this is the case, the scale would technically be a mode,
            something currently not covered in this app.)
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Type of Scale
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Once you have the tonic note, you have to decide between one
            of four basic scales - Major, natural minor, harmonic minor, or
            melodic minor. For each possibility, there are multiple strategies
            you can use to identify the scale.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}Identifying a Major Scale</Text>
          <Text style={styles.LearnText}>
            {"\t"}First, you can check if the scale is Major. To do this, you
            can use the ‘reverse the process’ method from the Keys Learn page
            and find the key signature of the tonic note. For example if the
            tonic note is A, there will be three sharps, F#, C#, and G#. Then,
            you check if those and those sharps only are the accidentals (sharps
            or flats) in the scale. If they are, the scale can be identified as
            A Major.
            {"\n"}
            {"\t"}A second strategy to identify a Major scale is looking at the
            distance between notes. In a Major scale, the intervals will be in
            the following order: whole step, whole step, half step, whole step,
            whole step, whole step, half step. (WWHWWWH)
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying a Natural Minor Scale
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}If the scale proves not to be a Major scale, you can check for
            a natural minor scale. One strategy involves again taking the tonic
            note but then converting it to its relative major. (Here you are
            assuming that the tonic note is representing a minor key signature).
            Then you find the key signature of the major key and check whether
            those accidentals are the only ones applied to the scale. If so, you
            have a natural minor scale.
            {"\n"}
            {"\t"}Another way to identify a natural minor scale is directly from
            the Major scale. Once you have identified what the Major scale
            should look like, if the third note, the sixth note, and the seventh
            note are lowered a half step, the scale will be in its natural minor
            form.
            {"\n"}
            {"\t"}A third strategy to identifying a natural minor scale would be
            to use half steps and whole steps in a similar way done to identify
            major scales. In a minor scale, the distance between notes will be
            whole step, half step, whole step, whole step, half step, whole
            step, whole step. (WHWWHWW)
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying a Harmonic Minor Scale
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Once again, if the scale turns out to not be natural minor,
            you can move on to the harmonic minor scale. The harmonic minor
            scale is very similar to the natural minor scale except that the
            seventh note is raised a half step. This can be seen in an a minor
            scale. If the scale was natural minor, there would be no
            accidentals. But if the seventh note was raised a half step (G
            becomes G#), then we could be certain the scale is in its harmonic
            minor form. (For this strategy you will have to first observe what
            the natural minor scale should look like.)
            {"\n"}
            {"\t"}However if you would like to use the whole step, half step
            strategy, the order is as follows. Whole step, half step, whole
            step, whole step, half step, 3 half steps, half step. (This can be
            directly derived from the natural minor sequence).
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying a Melodic Minor Scale
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Finally, if the scale is neither Major, natural minor, or
            harmonic minor, it could be a melodic minor. Melodic minor can be
            thought of in two ways. The first of these ways is taking a natural
            minor scale and raising the sixth and seventh note. Keep in mind
            though that the sixth and seventh notes are only raised as the scale
            ascends, as when the scale goes down, the melodic minor scale
            returns to its natural minor form.
            {"\n"}
            {"\t"}The second way of thinking of a melodic minor scale is to take
            the Major scale and lower the third note a half step. For example if
            you see an F Major scale but with an extra Ab, you would identify it
            as an f melodic minor scale. (This is once again only for ascending
            scales, on the way down melodic minor scales look just like natural
            minor scales.)
            {"\n"}
            {"\t"}If you still prefer the half step, whole step method, the
            order (for ascending scales) is as follows. Whole step, half step,
            whole step, whole step, whole step, whole step, half step.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}A Trick for Difficult Scales
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}While these methods should work for every scale, difficult
            keys can make your job more difficult. For example, if you are asked
            to identify the quality of a G# Scale, it would be more challenging
            as there are a lot of accidentals to deal with. In addition, you may
            have to deal with double sharps or double flats. Luckily a simple
            alternative exists. You can start by bringing the G# scale down a
            half step to a G Scale. Since you lowered the starting note a half
            step but want to keep the quality of the scale the same, every note
            in the scale must also be lowered the same half step. (This way the
            half steps and whole steps between notes remain the same). Once you
            imagine all of the notes being lowered a half step, you can simply
            identify the quality of the G scale. Since the key of G will not
            have many accidentals, it should be relatively easier to recognize
            the scale's quality. And since we did not change the quality of the
            scale when going from G# to G, we can take the quality of the G
            scale and put it right after our G# scale.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}With Practice Comes Speed</Text>
          <Text style={styles.LearnText}>
            {"\t"}Right now, this step by step process of checking for each
            scale individually may seem slow. But as you practice, you'll find
            yourself directly idenfying scales rather than going through each
            possibility separately.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}So Many More</Text>
          <Text style={styles.LearnText}>
            {"\t"}Though we have covered 4 basic types of scales, the list does
            not end there. There are many more types of scales such as whole
            tone scales, chromatic scales, modes, pentatonic scales, and several
            more. I recommend learning some of the more common ones as listed
            above as they can spice up your music as well as your improvisation
            skills. In addition, it is also fun to experiment and see what kinds
            of scales there are waiting to discovered.
          </Text>
        </ScrollView>
        <View style={{ flex: 0.1, justifyContent: "center" }}>
          <AntDesign
            name="caretdown"
            size={30}
            color="#4d4d4d"
            style={{ alignSelf: "center", opacity: isNearBottom }}
          />
        </View>
        <View style={{ flex: 0.03 }}>
          <BackButton />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: 17,
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    width: 70,
    height: 45,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
  },

  Subtitle: {
    color: "#000",
    fontFamily: "Verdana-Bold",
    fontSize: RFPercentage(1.6),
  },

  LearnText: {
    color: "#000",
    fontFamily: "Verdana",
    fontSize: RFPercentage(1.6),
    lineHeight: RFPercentage(1.6) * 1.5,
  },
});
