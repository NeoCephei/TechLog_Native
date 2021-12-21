import React from "react";
import { Image, View, StyleSheet } from "react-native";

const QuestionPicture = () => {

  return (
    <View style={questionImageStyles.container}>
      <Image 
        style={questionImageStyles.image}
        source={require('../../assets/images/question1.png')} />
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
