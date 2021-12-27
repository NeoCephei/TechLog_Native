import React from 'react';
import { View, StyleSheet } from 'react-native';

import Answers from '../molecules/answers';

const AnswerContainer = () => {

  const mockQuestion = {
    description: 'this is a mock question',
    image: 'http://placehold.it/',
    correct: '5',
    wrong: [
      '1',
      '2',
      '3',
      '4',
      '6',
      '7'
    ],
    description: 'this is a mock description'
  }

  const getAnswer = () => {
    //This will be a function that fetch one question (as mock) and displays 4 answers
    const answers = [];

    answers.push({value: mockQuestion.correct, correct: true});
    populateArray(answers, mockQuestion.wrong, 4)

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
}

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