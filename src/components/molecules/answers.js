import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {lifeReset, loseLife, answerQuestion} from '../../redux/actions'

const Answers = ({option}) => {

  const dispatch = useDispatch();
  const lifes = useSelector((state) => state.lifes);
  const {answered} = useSelector(state => state.questions);

  const [clickedAnswer, toggleChoice] = useState(false)

  // <Image
  //   source={require('../../assets/icons/information.png')}
  //   style={answered 
  //     ? questionInformationStyles.icons
  //     : questionInformationStyles.iconsHide}
  // />

  function handleAnswer(answer) {
    // console.log('>>>> Your answer:', answer, '>>>> Answered?:', answered);
    if (answered) {
      return
    }

    toggleChoice(!clickedAnswer)
    if (answer) {
      // console.log('Your answer', answer)
    } else {
      lifes === 0 
      ? dispatch(lifeReset())
      : dispatch(loseLife())
    }
    dispatch(answerQuestion());
  }

  return (
    <TouchableOpacity 
      title="option"
      key={option.value}
      onPress={() => handleAnswer(option.correct)}
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