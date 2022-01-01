import homeStyles from "../../styles/home.styles";

import React, {useEffect} from "react";
import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";


import { lifeReset, toggleLogin, resetQuestion } from '../../redux/actions/index'

const GameOver = () => {

  const dispatch = useDispatch();

  function handleRestart() {
    dispatch(lifeReset())
    dispatch(toggleLogin())
    dispatch(resetQuestion())
  }

  return (
    <ImageBackground
    source={require("../../assets/images/binaryCloud.jpg")}
    style={homeStyles.image}
    >
      <View style={homeStyles.container}>
        <Text style={homeStyles.text}>We will call you soon!</Text>
        <TouchableOpacity 
          title="Get Started"
          key={"RestartKey"}
          style={homeStyles.btn}
          onPress={() => handleRestart()}
        > 
          <Text style={homeStyles.btnText}>Start Again</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GameOver;