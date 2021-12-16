import React from "react";
import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import quizStyles from "../../styles/quiz.styles";

import { toggleLogin } from '../../redux/actions/index'

const Quiz = () => {

  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  return (
    <ImageBackground
    source={require("../../assets/images/home_background.jpg")}
    style={quizStyles.image}
    >
      <View style={quizStyles.container}>
        <Text style={quizStyles.text}>Quiz Page</Text>
        <TouchableOpacity 
          title="Get Started"
          key={login}
          onPress={() => {dispatch(toggleLogin())}}
          style={quizStyles.btn}
        > 
          <Text style={quizStyles.btnText}>x</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Quiz;