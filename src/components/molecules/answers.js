import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Answers = ({option}) => {

  return (
    <TouchableOpacity 
      title="option"
      key={option.value}
      onPress={() => console.log(option.correct)}
      style={answersStyles.container}
    > 
      <Text style={answersStyles.text}>
        {option.value}
      </Text>
    </TouchableOpacity>
  )
}

export default Answers;

const answersStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: "center",
    alignItems: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    width: "80%",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor:'#dcdae2',

    borderWidth: 3,
    borderColor:'#2B2A2F',
  },
  text: {
    color: "#2A9AE6",
    fontSize: 20,
  }
})