import React from "react";
import { View, ImageBackground } from "react-native";
import { useSelector } from "react-redux";

import quizStyles from "../../styles/quiz.styles";

import TopInfo from "../organisms/topInfo"
import QuestionContainer from "../organisms/questionContainer"
import AnswerContainer from "../organisms/answerContainer";
import BottomInfo from "../organisms/bottomInfo"

const Quiz = () => {

  const {index} = useSelector(state => state.questions);

  return (
    <ImageBackground
    source={require("../../assets/images/binaryCloud.jpg")}
    style={quizStyles.image}
    >
      <View style={quizStyles.container}>
        <TopInfo />
        <QuestionContainer />
        <AnswerContainer questionIndex={index}/>
        <BottomInfo />
      </View>
    </ImageBackground>
  );
};

export default Quiz;