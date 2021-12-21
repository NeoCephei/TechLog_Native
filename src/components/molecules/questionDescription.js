import React from "react";
import { Text, View, StyleSheet } from "react-native";

const QuestionDescription = () => {

  return (
    <View style={questionDescriptionStyles.container}>
      <Text style={questionDescriptionStyles.text}>
        Guess the output
      </Text>
    </View>
  )
}

export default QuestionDescription;

const questionDescriptionStyles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    flexWrap: "nowrap",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 30,
  }
})