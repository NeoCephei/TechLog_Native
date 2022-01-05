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

export default function Questions({ navigation }) {
  return (
    <View style={styles.questions}>
      <Text onPress={() => navigation.navigate("Home")}>Back</Text>
      <Text>Question 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  questions: {
    flex: 1,
    paddingTop: 50,
  },
});
