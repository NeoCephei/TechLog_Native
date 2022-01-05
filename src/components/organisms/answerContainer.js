import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

import Answers from '../molecules/answers';

const AnswerContainer = () => {
  //I just want to update this one if index changes

  const {questions, index} = useSelector(state => state.questions);

  const currentQuestion = questions[index];

  const getAnswer = () => {
    const answers = [];

    answers.push({value: currentQuestion.correct, correct: true});
    populateArray(answers, currentQuestion.wrong, 4)

    return shuffleArray(answers)
  }

  const shuffleArray = (array) => {
    let currentIndex = array.length - 1;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array;
  }
  const populateArray = (array, data, size) => {
    const pickedIndex = [];
    let randomIndex;

    while (array.length < size) {
      randomIndex = Math.floor(Math.random() * data.length);
      if (!pickedIndex.includes(randomIndex)) {
        pickedIndex.push(randomIndex)
        array.push({value: data[randomIndex], correct: false});
      }
    }
  }

  const options = getAnswer()
  const renderOptions = options.map(option => {
    return <Answers key={option.value} option={option}/> 
  })

  return (
    <View style={questionContainerStyles.container}>
      {renderOptions}
    </View>
  )
};

export default AnswerContainer;

const questionContainerStyles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
})