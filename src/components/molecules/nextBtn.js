import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {nextQuestion} from '../../redux/actions'

const NextBtn = () => {

  const dispatch = useDispatch();
  const {answered} = useSelector(state => state.questions);

  function handleNext() {
    dispatch(nextQuestion())
  }

  return (
    <View style={nextBtnStyles.container}>
      <TouchableOpacity 
        title='Next Question'
        key='next'
        onPress={() => handleNext()}
        style={ answered 
          ? nextBtnStyles.btn
          : nextBtnStyles.btnHide}
        disabled={!answered}
      > 
        <Text style={nextBtnStyles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NextBtn;

const nextBtnStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: "center",
    alignItems: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    width: "50%",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor:'#dcdae2',
  
    borderWidth: 3,
    borderColor:'#2B2A2F',
  },
  btnHide: {
    opacity: 0, 
    height: 0
  },
  btnText: {
    fontSize: 20,
    color: "#000",
  }
})