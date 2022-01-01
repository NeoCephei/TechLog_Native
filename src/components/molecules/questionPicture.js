import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const QuestionPicture = () => {
  const {questions, index} = useSelector(state => state.questions);

  return (
    <View style={questionImageStyles.container}>
      <Image 
        style={questionImageStyles.image}
        source={{uri: `${questions[index].image}`}} />
    </View>
  )
}

export default QuestionPicture;

const questionImageStyles = StyleSheet.create({
  container: {
    flex:5,
    flexDirection: 'column',
    flexWrap: "nowrap",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: "100%",
  },
  image: {
    resizeMode : 'contain',
    height: 200,
    width: 400,
  }
})
