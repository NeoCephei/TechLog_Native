import React from "react";
import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import quizStyles from "../../styles/quiz.styles";

import TopInfo from "../organisms/topInfo"
import QuestionContainer from "../organisms/questionContainer"
import AnswerContainer from "../organisms/answerContainer";

const Quiz = () => {

  return (
    <ImageBackground
    source={require("../../assets/images/binaryCloud.jpg")}
    style={quizStyles.image}
    >
      <View style={quizStyles.container}>
        <TopInfo />
        <QuestionContainer />
        <AnswerContainer />

        <View style={quizStyles.view4}>
          <Text>bottomInfo</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Quiz;