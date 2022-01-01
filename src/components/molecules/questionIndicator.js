import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const QuestionIndicator = () => {
  const question = useSelector(state => state.questions);

  return (
    <View style={questionIndicatorStyles.container}>
      <Text style={questionIndicatorStyles.text}>
        {`${question.index + 1}/${question.questions.length}`}
      </Text>
    </View>
  )
}

export default QuestionIndicator;

const questionIndicatorStyles = StyleSheet.create({
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
  }
})