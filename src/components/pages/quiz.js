import React from "react";
import { View, ImageBackground } from "react-native";

import apiService from "../../services/ApiService"
// keepServerAlive, getQuestions, postQuestion,

import quizStyles from "../../styles/quiz.styles";

import TopInfo from "../organisms/topInfo"
import QuestionContainer from "../organisms/questionContainer"
import AnswerContainer from "../organisms/answerContainer";
import BottomInfo from "../organisms/bottomInfo"

const Quiz = () => {

  const keepServer = async () => {
    const isAlive = await apiService.keepServerAlive();
    console.log(isAlive);
  }
  const questions = async () => {
    const allQuestions = await apiService.getQuestions();
    console.log(allQuestions)
  }

  questions()

  setInterval(() => {
    keepServer();
  }, 1000*60)

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