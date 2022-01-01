import homeStyles from "../../styles/home.styles";

import React, {useEffect} from "react";
import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import apiService from "../../services/ApiService" 
// keepServerAlive, getQuestions, postQuestion,

import { toggleLogin, addQuestions } from '../../redux/actions/index'

const HomePage = () => {

  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  (async function () {
    const TIMER_TO_REFRESH = 1000 * 60 * 10; //10 minutes
    setInterval(async function () {
      const isAlive = await apiService.keepServerAlive();
      console.log(isAlive);
    }, TIMER_TO_REFRESH)

    const allQuestions = await apiService.getQuestions();
    dispatch(addQuestions(allQuestions));
  })()

  const handleStartup = () => {
    dispatch(toggleLogin())
  };

  return (
    <ImageBackground
    source={require("../../assets/images/binaryCloud.jpg")}
    style={homeStyles.image}
    >
      <View style={homeStyles.container}>
        <Text style={homeStyles.text}>TECH.LOG</Text>
        <TouchableOpacity 
          title="Get Started"
          key={login}
          onPress={() => {handleStartup()}}
          style={homeStyles.btn}
        > 
          <Text style={homeStyles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomePage;