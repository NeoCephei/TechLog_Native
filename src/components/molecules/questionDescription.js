import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const QuestionDescription = () => {
  const {questions, index} = useSelector(state => state.questions);

  return (
    <View style={questionDescriptionStyles.container}>
      <Text style={questionDescriptionStyles.text}>
        {questions[index].description}
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