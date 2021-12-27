import React from "react";
import { View, ImageBackground } from "react-native";

import apiService from "../../services/ApiService"
// getQuestions, postQuestion,

import quizStyles from "../../styles/quiz.styles";

import TopInfo from "../organisms/topInfo"
import QuestionContainer from "../organisms/questionContainer"
import AnswerContainer from "../organisms/answerContainer";
import BottomInfo from "../organisms/bottomInfo"

const Quiz = () => {

  const questions = async () => {
    const allQuestions = await apiService.getQuestions()
    console.log(allQuestions)
  }

  questions()

  return (
    <ImageBackground
    source={require("../../assets/images/binaryCloud.jpg")}
    style={quizStyles.image}
    >
      <View style={quizStyles.container}>
        <TopInfo />
        <QuestionContainer />
        <AnswerContainer />
        <BottomInfo />
      </View>
    </ImageBackground>
  );
};

export default Quiz;