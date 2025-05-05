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

export default function TriadsLearn() {
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
          <Title title="Triads" />
          <Text style={styles.Subtitle}>{"\n"}What are Triads</Text>
          <Text style={styles.LearnText}>
            {"\t"}Triads are a type of chord that contain three notes, each a
            third (interval) above the previous note. For example, if the root
            (the first note) is C, then the third would any form of E. Meanwhile
            the fifth would be any form of G. It is important to be able to
            recognize triads as they are the basic foundation to chords, and
            understanding them can allow you to analyze as well as improvise
            music better.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}Identifying the Notes</Text>
          <Text style={styles.LearnText}>
            {"\t"}To identify a triad, you must first identify the three notes
            that are in the triad. Then, you have to reorder them in such a way
            that each note is a third higher than the previous note. Taking the
            earlier example, if the notes are in the order G, E, C, we would
            have to rearrange them to C, E, G. This is because E is a third
            above C and G is a third above E. (For more information check the
            intervals page). From the ordered notes, we take the bottommost one,
            and that becomes the root of the chord. The example above would be a
            C triad.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of a Major Triad
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Once you have the three notes, you must identify its quality
            which can be Major, minor, Augmented, or diminished. First, if the
            interval between the first and the third is a major third (or four
            half steps) and the interval between the third and the fifth is a
            minor third (or three half steps), the triad’s quality can be
            considered Major. In our C triad example, since E is a major third
            above E, and G is a minor third above E, the triad with C, E, and G
            would be a C Major triad.
            {"\n"}
            {"\t"}Another way to think of a Major triad is that the three notes
            all belong to the root's scale. For example if the three notes are
            F#, A, and D, we can say the root is D. Since F# and A are both in
            the D Major scale, this is a D Major triad.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of a Minor Triad
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Next, if the interval between the first and the third is a
            minor third, and the interval between the third and the fifth is a
            major third, the triad can be said to be minor. It is important to
            note the difference between major triads and minor triads, and to
            remember major triads have a major third then a minor third, while
            this is reversed for minor triads.
            {"\n"}
            {"\t"}Minor triads can also be though of in two other ways. Similar
            to major triads, the notes in a minor triad will belong to the
            root's minor scale. For example, take the notes E, G, and B. Since
            the root is E, and G and B both appear in an E minor scale, this
            would be an E minor triad.
            {"\n"}
            {"\t"}A third way of thinking of a minor triad is to compare it to a
            major triad. If you know what the major triad should look like, the
            minor triad will look the same but with the third lowered a half
            step. For example if you are asked to identify a triad consisting of
            B, D, and F#, you might first check for a Major triad. You'd
            identify the major triad as B, D#, and F#. Since the actual triad's
            third however is a D (not a D#), this would be a B minor triad.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Augmented and Diminished Triads
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Finally, if the triad turns out to not be Major or minor, it
            can be either diminished or augmented. The first way to think of
            these are with half steps. The distance between the first and third
            in a diminished triad will be a minor 3rd and the same can be said
            about the distance between the third and the fifth. However with
            augmented traids, these two distances will both be major 3rds.
            {"\n"}
            {"\t"}The other way to think of these triads is to compare them to
            major and minor triads. A diminished triad will look the same as a
            minor triad except that the fifth will be lowered a half step. For
            example if a A minor chord consists of A, C, and E, the A diminished
            chord will consist of A, C, and Eb (where E - the fifth - was
            lowered a half step).
            {"\n"}
            {"\t"}Meanwhile, augmented triads will look the same as Major triads
            except their fifth will be raised a half step. For example if a G
            Major triad consists of G, B, and D, then the G augmented triad
            would contain G, B, and D# (where D - the fifth - was raised a half
            step).
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of a Difficult Key
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}While these strategies above will work for all triads, some
            triads can be more challenging than others. For example a B# triad
            with B-sharp, D-double sharp, and F-double sharp, that contains
            complicated accidentals can be challenging to identify. Luckily a
            simple trick exists to go around this. Similar to the strategy used
            in scales and intervals, we can use the idea that if the distance
            between notes stays the same, the quality of the triad also stays
            the same. Taking this knowledge into account, we can say that if we
            raise/lower all the notes by the same amount of half steps, the
            quality remains the same. Lets try this trick on the example above.
            {"\n"}
            {"\t"}By lowering all the notes a half step, we get B, D#, and F#
            (from B#, D double sharp, and F double sharp). Since we lowered all
            the notes by the same interval, the quality remained the same. Here
            it is clear that this is a B Major triad. Therefore we can say the
            original triad was a B# Major triad.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}Inversions</Text>
          <Text style={styles.LearnText}>
            {"\t"}While these will not show up in any of the problems in this
            app, it is important to know about inversions as they are more
            realistic to what you would see in real music. In addition, they let
            you adjust triads to sound different based on what the piece needs.
            In actual compositions, it is highly unlikely that the notes in
            triads will actually all be a third apart. Instead, they might be
            ordered differently, and could also be divided by multiple octaves.
            {"\n"}
            {"\t"}These different versions of the same triad represent different
            inversions. To identify the inversion, you must know what the lowest
            note is. For example if the triad consisted of E, G, C, the lowest
            note is E. After ordering the notes such that they are in our base
            form that we worked with previously, we can see where our lowest
            note ends up. For example, in the previous example, E is the third
            of the chord. In the case where the lowest note is the third of the
            chord, the triad can be said to be in 1st inversion.
            {"\n"}
            {"\t"}However if the lowest note is the fifth of the chord, the
            triad would be considered in 2nd inversion. An example of this would
            be where the notes were E, A, and C. Since the lowest note is the
            fifth of the a minor triad, this would be in second inversion.
            {"\n"}
            {"\t"}Finally, if the lowest note is the root of the chord, the
            triad's inversion is root position.
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
        <BackButton />
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
    textAlign: 'justify'
  },
});
