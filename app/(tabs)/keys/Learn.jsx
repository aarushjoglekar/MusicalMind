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

export default function KeysLearn() {
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
          <Title title="Keys" />
          <Text style={styles.Subtitle}>{"\n"}What Is A Key</Text>
          <Text style={styles.LearnText}>
            {"\t"}The key of the music is the note or scale the composition is
            based around. Being aware of the key is helpful as the musician is
            aware of the chords they can expect in the piece. In addition, a
            skilled musician will be able to improvise as they know what chords
            would fit in the piece.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}How Keys Are Identified</Text>
          <Text style={styles.LearnText}>
            {"\t"}A key is identified by the key signature, or the set of sharps
            (#) or flats (b) that are used in the music. If a key signature has
            sharps, it will only have sharps and no flats, and the same goes for
            flats. Each key signature represents two keys: a major key, and a
            minor key. In this explanation, you will learn how to identify the
            keys that a key signature can represent.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying Major Key Signatures With Sharps
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}The basic idea of identifying the major key of a key signature
            with sharps is to raise the last sharp by a half step. A key
            signature with sharps will always follow this order: F#, C#, G#, D#,
            A#, E#, B#. (This can be remembered with Fat Cats Go Down Alleys
            Eating Bologna).
            {"\n"}
            {"\t"}Therefore, if a key signature has three sharps, it will have
            the first three sharps in the order: F#, C#, and G#. According to
            the strategy, to find the key you must take the last sharp and raise
            it a half step. Since the last sharp in this scenario is G#, you
            would raise it by one note on the piano to get A. To conclude, the
            major key represented by a key signature of three sharps is A Major.
            {"\n"}
            {"\t"}Similarly, if a key signature has five sharps, they will be
            F#, C#, G#, D#, and A#. Since the last sharp is A#, to find the key
            we must raise A# by a half step getting the key of B Major. (If you
            are unsure of how to raise a note a half step, raise the note by one
            key on the piano).
            {"\n"}
            {"\t"}A third example is if a key signature has seven sharps. In
            this case, the sharps will be F#, C#, G#, D#, A#, E#, and B#. Since
            the last sharp is B#, raising it a half step gives the key of C#
            Major. (B# is the same note as C so raising it a half step results
            in C#).
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying Major Key Signatures With Flats
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}The basic logic of identifying the major key of a key
            signature with flats is to identify the second last flat. A key
            signature with flats will always follow the opposite order as
            sharps: Bb, Eb, Ab, Db, Gb, Cb, Fb. (This can be remembered as BEAD
            Gum Candy Fruit).
            {"\n"}
            {"\t"}One example is if a key signature has three flats. Here, the
            flats will be Bb, Eb and Ab. According to the strategy, to find the
            key you must identify the second last flat. In this scenario, that
            will be Eb. Therefore, the key represented by three flats is the key
            of Eb Major.
            {"\n"}
            {"\t"}Another example is if a key signature has five flats. In this
            case, they will be Bb, Eb, Ab, Db, and Gb. Since the second last
            flat is Db, the key represented by five flats will be Db Major.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Exceptions to Identifying Major Keys
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}There are two exceptions to identifying the major keys of key
            signatures. The first one is when there are no sharps or flats. This
            is a special scenario because none of the previous strategies will
            work to find the key (as there are no sharps or flats to work with).
            The fact is that you will just have to memorize that no sharps or
            flats corresponds to C Major.
            {"\n"}
            {"\t"}The second exception is when there is only one flat. Since
            there is no second last flat to identify, the previous strategy will
            not work. For this too, you will have to memorize the key signature
            containing one flat as F Major.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}Identifying Minor Keys</Text>
          <Text style={styles.LearnText}>
            {"\t"}To identify a minor key, you must first know the major key.
            Then, you take the major key and go down three half steps. (If you
            don’t know how to go down three half steps, go down three notes on a
            piano, and practice this until you can visualize it without actually
            looking at the piano). The corresponding minor key is known as the
            major key’s relative minor, because it is the minor key that has the
            same key signature as the major key.
            {"\n"}
            {"\t"}Let's take an example before. We have already found that a key
            signature with five sharps will correspond to B Major. Now traveling
            three half steps down will take us to A#, then A, and finally G#.
            So, the relative minor of B Major is G# minor.
            {"\n"}
            {"\t"}Another example is when a key of three flats is Eb Major.
            Traveling down three half steps will go to D, Db, and finally C.
            This means if you are asked to find the minor key of a key signature
            with three flats, you would first recognize the major key of Eb
            Major and then go down to C minor.
            {"\n"}
            {"\t"}However when working with this process, don't make this simple
            mistake. Though you can argue that F# and Gb are the same note, you
            cannot say their key signatures are the same. This is because the
            key signature of F# (major or minor) will contain sharps while the
            key signature of Gb (major or minor) will contain flats. Because of
            this problem, you may find it hard to identify minor key signatures.
            This is because going three half steps down from (take our previous
            example) B Major gets either g# or ab, and you may not know which
            one to use for the minor key.
            {"\n"}
            {"\t"}The simple way around this is to before going down three half
            steps, go down two notes (creating an interval of three notes)
            removing all accidentals. Take the example of B Major. Going down
            one note gets A, and then again gets G. Now we know that the minor
            key of B Major must have G in it, so we go with G# minor rather than
            Ab minor.
            {"\n"}
            {"\t"}Let's take one more example. Say we have the key of F# Major.
            Firstly, we create an interval distance of three notes by going down
            two notes from F. This informs us the relative minor of this key
            will have a D in it. Going down three half steps from F# gets us to
            F, E, and then Eb. However since the key must have D in it, the
            relative minor of F# Major is d# minor.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}Reversing the Process</Text>
          <Text style={styles.LearnText}>
            {"\t"}Now you know how to identify the key given the key signature
            but what if you are given the key and are asked to find the key
            signature? This process is fairly simple as you just repeat the
            previous strategies but in reverse order. First, you would want to
            make sure the key is in major. This is simple as if it is in minor,
            you can simply go up three half steps to make it major.
            {"\n"}
            {"\t"}Then, you would recognize whether the key signature contains
            flats or sharps. A major key will only contain flats (with the
            exception of F Major) if and only if the key name contains a flat.
            If you find your key signature contains flats, to reverse the
            process, you need to ensure that the key name is the second last
            flat. Keep adding flats to the key signature by the order of flats
            until you get to the key name. Then add an additional flat to make
            the key name the second last flat.
            {"\n"}
            {"\t"}However, on the other hand, if the key signature contains
            sharps, you will have to go down a half step from the key name. This
            will be the last sharp. From here, add sharps by the order of sharps
            to the key signature until you reach the last sharp previously
            determined.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Keys that Don't Have Key Signatures
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}One interesting fact to note is that not all keys will have a
            corresponding key signature. For example for D#, E#, G#, A#, and B#
            Major, you cannot write a key signature that follows all the rules.
            This is because in these cases, some of the notes in their key will
            contain double sharps which cannot be notated into a key signature.
            The same issue arises with Fb Major which cannot be notated due to
            its B-double flat.
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
