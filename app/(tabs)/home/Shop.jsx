import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import Title from "../../../components/Title";
import BackButton from "../../../components/BackButton";
import ShopItem from "../../../components/ShopItem";
import FreeShopItem from "../../../components/FreeShopItem";

export default function Shop() {
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/Shop.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Shop" />
        </View>
        <View style={{ flex: 3 }} />
        <View style={{ flex: 90 }}>
          <ScrollView>
            <View style={[{ flexDirection: "row" }, styles.container]}>
              <View style={{ flex: 0.2 }} />
              <View style={{ flex: 1 }}>
                <FreeShopItem/>
              </View>
              <View style={{ flex: 1 }}>
                <ShopItem
                  text="Streak Freeze"
                  imageSource={require("../../../assets/images/ShopImages/streakFreeze.png")}
                  cost={300}
                />
              </View>
              <View style={{ flex: 0.2 }} />
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 7,
            justifyContent: "flex-end",
            marginBottom: 20,
          }}
        >
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
});
