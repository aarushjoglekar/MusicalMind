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

export default function IntervalsLearn() {
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
          <Title title="Intervals" />
          <Text style={styles.Subtitle}>{"\n"}What are Intervals</Text>
          <Text style={styles.LearnText}>
            {"\t"}Intervals are the distance between two notes. It is helpful to
            be aware of intervals as they can help you understand the
            relationship between two notes in music. They can also help you play
            music by ear. This is because when you try to play a song, you won't
            be thinking about each and every note, but rather the intervals
            between the notes. In addition, you can use this unique way of
            reading music to transpose.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Distance Between two Notes
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}The form in which intervals are written can be broken into two
            parts. The quality and the distance. Identifying the distance is
            fairly simple - you just have to recognize how many notes (without
            accidentals) are from the first note - the bottom note - to the
            second note - the top note - (inclusive). For example if the
            interval consists of D and Bb (in this case the D is below Bb), you
            can see the notes between them without accidentals are D, E, F, G,
            A, and B Since there are six notes from D to Bb, this interval would
            be a sixth.
            {"\n"}
            {"\t"}Another way to think about the distance between two notes is
            to use scales. Here we can see that a B (with any kind of
            accidental) would be the sixth note in a D scale (D could also have
            any kind of accidental and this would still work). For this reason,
            the distance of this interval is a sixth.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of Perfect Intervals
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}There are two sets of qualities that could apply to intervals.
            The first one is used when the interval distance is a 4th, 5th, or
            8th. To identify the quality of these kinds of intervals, you can
            first check if the interval is perfect or not. If the interval is
            perfect, the top note (with accidentals) will appear in the first
            note’s Major or Minor scale. For example if the two notes are B and
            F#, the distance is a 5th. Since F# is the 5th note in a B Major (or
            minor) scale, the interval between B and F# would be a Perfect 5th
            otherwise notated as a P5.
            {"\n"}
            {"\t"}If the interval turns out to not be perfect, you should try to
            identify what the perfect interval would look like. For example if
            the two notes were G and C#, we would try to keep one of the notes
            and see what the other would have to be for it to be perfect. For
            the sake of this example, let's keep the note G and modify C#. Well
            since the interval distance is a 4th, we now need to identify what
            the 4th note in a G Major scale is. Since it is a C, we know a P4
            would consist of a G and a C.
            {"\n"}
            {"\t"}Now it's time to compare the actual interval with the perfect
            interval we just identified. If the distance (in half steps) between
            the actual interval is one half step more than the distance in the
            perfect interval, the interval's quality is augmented. Meanwhile if
            the distance (in half steps) between the actual interval is one less
            half step than the distance in the perfect interval, the interval's
            quality is diminished. Let's take our previous example. The actual
            interval is a G to a C# while the perfect interval is a G to a C. To
            get the actual interval from the perfect interval, we must raise the
            top note by a half step. This in turn increases the distance of the
            perfect interval by one to get the actual interval's distance.
            Therefore, the actual interval's distance is a half step more than
            the perfect interval and it's quality is augmented. This can be
            notated as A4. (If the quality was diminished, it would be notated
            as d4).
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of Non-Perfect Intervals
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}The second set of qualities applies to non-perfect intervals
            or 2nds, 3rds, 6ths, and 7ths. Let's take an example of a 3rd
            consisting of A and C#. Similarly to the strategy for Perfect
            intervals, you would check if C# appears in an A Major scale. (Note
            this time a minor scale will not work). Since it does, this
            interval’s quality is Major and can be written as M3.
            {"\n"}
            {"\t"}However if the interval is not Major, you need to recognize
            what a Major interval would look like. For example if the interval
            was D and Bb, we can say the interval distance is a 6th. The 6th
            note in a D Major scale is B. Therefore, a Major interval in this
            case would be a D and a B. Now we need to test the Major interval
            against the actual interval. If the distance (in half steps) of the
            actual interval is one less than the distance in half steps of the
            Major interval, the actual interval's quality is minor. We can test
            this with the example above. To get the actual interval of D and Bb
            from the Major interval of D and B, we need to lower the top note a
            half step. This in turn decreases the distance of the Major interval
            by one half step meaning the actual interval is one half step less
            than the Major interval. Now we can say that the interval of D and
            Bb is minor and can be written as m6.
            {"\n"}
            {"\t"}You can continue this same strategy for the other two
            qualities of Non-Perfect Intervals. If the number of half steps in
            the actual interval is two less than the number of half steps in the
            Major interval (or one less than the number of half steps in the
            minor interval), the interval is diminished. Meanwhile if the number
            of half steps in the actual interval is one more than the number of
            half steps in the Major interval, the interval is Augmented.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Distance of Intervals Common Mistake
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Sometimes you may have an interval which contains complicated
            accidentals. For example a G and a B#. Though you may argue that B#
            is the same note as C and the interval is therefore a 4th, you must
            take into account that the note is technically a variation of B, so
            rather than being a Perfect 4th, it would be an Augmented 3rd.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of Intervals With Complicated
            Accidentals Trick
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Sometimes you may come across an interval with complicated
            accidentals. For example Eb and G-double flat. Though the strategies
            above will work to identify the interval, it may be difficult and
            inefficient. Luckily, a simple trick exists. If the number of half steps
            between two notes remains the same, then the quality of the interval
            will remain the same as well. Using this knowledge, you can raise
            both of the notes by a half step. In this example, that will result
            in the new two notes being E and Gb. From here we can clearly see
            this is a diminished 3rd. And by remembering that when we changed
            notes, we didn’t change the interval, we can say that the interval
            of Eb and G-double flat is a d3.
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
