import React from "react";
import { View, StyleSheet } from "react-native";

import QuestionDescription from '../molecules/questionDescription'
import QuestionPicture from "../molecules/questionPicture";

const QuestionContainer = () => {

  return (
    <View style={questionContainerStyles.container}>
      <QuestionDescription />
      <QuestionPicture />
    </View>
  )
}

export default QuestionContainer;

const questionContainerStyles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column',
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
})