import {
  Dimensions,
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
import { useCallback, useState } from "react";
import { useVideoPlayer, VideoView } from "expo-video";
import YoutubeIframe from "react-native-youtube-iframe";

const width = Dimensions.get("window").width;

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
          <View style={{height: 30}}/>
          <YoutubeIframe
            height={width * 9 / 16}
            videoId={"_fPeQawIhC8"}
          />
          <Text style={styles.Subtitle}>{"\n"}What Is A Key</Text>
          <Text style={styles.LearnText}>
            {"\t"}The key of the music is the pitch or scale the composition is based on. Being aware of the key is helpful as the musician is aware of the chords they can expect in the piece. Additionally, a skilled musician could improvise as they know what chords fit in the piece.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}How Keys Are Identified</Text>
          <Text style={styles.LearnText}>
            {"\t"}A key is identified by the key signature, or the set of sharps (#) or flats (b) used in the music. It is important to note that a key signature will not contain sharps AND flats, it will only contain one type of accidental. Each key signature represents two keys: a Major key, and a Minor key. Today, you’ll learn how to identify the keys that a key signature can represent.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Order of Sharps and Flats
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Before we begin identifying key signatures, it is important to remember the order of sharps. This rule says that sharps in the key signature will always follow this order: F#, C#, G#, D#, A#, E#, B# (This can be remembered with the saying: Fat Cats Go Down Alleys Eating Bologna). This is helpful because if you are informed how many sharps are in the key signature, you can immediately conclude what is in the key signature. For example, if the key signature contains four sharps, they will be F#, C#, G#, and D# - the first four sharps in the order of sharps.
            {"\n"}
            {"\t"}A similar rule exists for flats. The order of flats is the reversed order of sharps: Bb, Eb, Ab, Db, Gb, Cb, Fb. This can also be remembered with the saying: BEAD Gum Candy Fruit.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying Major Key Signatures With Sharps
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}To identify the Major key of a key signature that contains sharps, you need to raise the last sharp by a half step. Let’s take the example where there are three sharps. Using the order of sharps, the key signature will contain F#, C#, and G#. Using the strategy, we can identify the last sharp as G#. Going up one half step will bring us to A. Therefore the Major key represented by three sharps in the key signature is A Major.
            {"\n"}
            {"\t"}Let’s take another example. If a key signature has five sharps, they will be F#, C#, G#, D#, and A#. Since the last sharp is A#, to find the key we must raise A# by a half step getting the key of B Major. Thus, the Major key represented by five sharps is B Major.
            {"\n"}
            {"\t"}Let’s take one last example. If a key signature has seven sharps, they will be all the sharps from the order of sharps. As a result, the last sharp will be B#. Raising this a half step results in C# concluding that the Major key from seven sharps is C# Major. (B# raised a half step results in C# because B# is technically the same pitch as C so going up a half step gives C#).
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying Major Key Signatures With Flats
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}To identify the Major key of a key signature consisting of flats, you need to identify the second last flat. Let’s take the example of three flats. Using the order of flats, the key signature will contain Bb, Eb, and Ab. Here, the second last flat is Eb. This means the Major key represented by three flats in the key signature is Eb Major.
            {"\n"}
            {"\t"}Let’s take another example. If a key signature has five flats, they will be Bb, Eb, Ab, Db, and Gb. Since the second last flat is Db, the Major key represented by five flats is Db Major.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Exceptions to Identifying Major Keys
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Now let’s look at the two exceptions to identifying Major keys. The first one exception occurs when there are no sharps or flats in the key signature; the key signature is empty. This is a special scenario because there is no last sharp to raise, or no second last flat to identify. Hence, you will need to remember that the Major key in correspondence to the empty key signature is C Major.
            {"\n"}
            {"\t"}The second exception occurs when there is only one flat in the key signature. Since there is no second last flat to identify, it is impossible to identify the Major key using the strategy above. Similarly, you will have to remember that the Major key of one flat is F Major.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}Identifying Minor Keys</Text>
          <Text style={styles.LearnText}>
            {"\t"}Now we know how to identify the Major keys that key signatures can represent. But these same key signatures also represent Minor keys. How do we identify those? Luckily the process is quite simple.
            {"\n"}
            {"\t"}To identify a Minor key, you must first know the Major key the key signature represents. Then, you take the Major key and go down three half steps. The corresponding Minor key is known as the Major key’s relative Minor, because it is the Minor key that has the same key signature as the Major key.
            {"\n"}
            {"\t"}Let’s take a previous example. We have already identified that a key signature with five sharps corresponds to B Major. Now traveling three half steps down will take us to A#, A natural, and finally G#. So, the relative Minor of B Major is G# Minor. (If you thought it could be Ab Minor, we’ll address this in a second). This means that the key signature of five sharps corresponds to B Major but can also correspond to G# Minor.
            {"\n"}
            {"\t"}Let’s take one more example. Let's consider a key signature with three flats. The Major key represented here is the second last flat or Eb Major. Going down three half steps takes us to D, Db, and finally C. This means the key signature of three flats not only represents Eb Major, but also C Minor.
            {"\n"}
            {"\t"}However, when converting Major keys to their relative Minor key, avoid this mistake. Though you can argue that F# and Gb are technically the same pitch, you cannot say their key signatures are the same. This is because the key signature of F# contains sharps while the key signature of Gb consists of flats. This becomes a problem when converting Major keys to their relative Minor. In our previous example where B Major becomes G# Minor, how can we say that the relative Minor of B Major is G# Minor and not Ab Major?
            {"\n"}
            {"\t"}The logic behind this is a more advanced topic but to simplify, when the distance between the Major key and its relative Minor must be a third. In other words, the letters of the pitch (the notes without any accidentals) of the Major key and the relative Minor key must be two letters apart. Using our example of B Major, going down two letters gives us A and then G. Therefore the relative Minor of B Major must have a G in it. This helps us choose G# Minor or Ab Minor.
            {"\n"}
            {"\t"}Let’s take one more example using the key of F# Major. Firstly by going down two letters, we get E, and then D. Therefore the relative Minor of F# Major must have the letter D in it. Going down three half steps from F# gives us F, E, and then Eb. However since the Minor key must have the letter D in it, the relative Minor of F# Major is D# Minor.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}Reversing the Process</Text>
          <Text style={styles.LearnText}>
            {"\t"}Now we know how to identify the Major and Minor keys a key signature can represent. But what if you are given the key name and are asked to find the corresponding key signature? This is a fairly simple two-step process. Firstly, convert the key to its relative Major if it is given in Minor. Keep in mind the relative Major will have the same key signature as the Minor key. Then, reverse the flats or sharps strategy to identify the key signature.
            {"\n"}
            {"\t"}Before we take a few examples, we should know when to choose the sharps strategy versus when we should choose the flats strategy. In short, if the key name has a flat in it, the key signature will contain flats. This is because the key name must be an accidental in the scale. Keep in mind however that F Major, our exception from before, will also contain flats. Other than this, other key signatures representing Major keys will contain sharps.
            {"\n"}
            {"\t"}Now let’s take the example of E Major. Since it is in the Major form, we don’t have to do anything for the first step. Then, we identify whether the key signature has sharps or flats. Since there is no flat in the key name and the key is not F Major, we can confirm E Major will contain sharps. Next, we reverse the sharps strategy. We know the last sharp raised by a half step provides the key name. Therefore the last sharp must be one half step lower than the key name. As a result, the last sharp of the key signature for E Major is D#. Now we can list the sharps in the order of sharps until we reach D#. This means the key of E Major will have F#, C#, G#, and D#.
            {"\n"}
            {"\t"}Let’s take a slightly more complicated example, this time with the key of F Minor. Since the key is in a Minor form, we first find the relative Major by this time going up three half steps instead of down. This brings us to F#, G, and finally Ab. Remember to use Ab and not G# because we need to maintain the two letter distance between the letter names of the Major and Minor key. Now we need to identify the key signature of Ab Major. Since the key name contains flats, the key signature will also contain flats. Remembering that the second last flat is the key name, we can say that Ab is also the second last flat of the key signature. We then use the order of flats and go one flat past Ab. This tells us the key signature of Ab Major consists of Bb, Eb, Ab, and Db. And since Ab Major and F Minor are relative keys, this same key signature applies to F Minor as well.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Keys that Don't Have Key Signatures
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}One interesting fact to note is that not all keys will have a corresponding key signature. For instance, the keys of D#, E#, G#, A#, and B Major, will not have a key signature that follows the rules above. This is because in these cases, some of the notes in their key will contain double sharps which cannot be notated into a key signature. The same issue arises with Fb Major which cannot be notated due to its B-double flat.
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
