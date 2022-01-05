import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require("../media/coffee.jpg")}
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={{ color: "#000", fontSize: 40 }}>TECH.LOG( )</Text>
        <TouchableOpacity
          style={styles.btn}
          title="Get Started"
          onPress={() => navigation.navigate("Questions")}
        >
          <Text>Get Started</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 70,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "center",
    alignItems: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
});
