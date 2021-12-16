import React from "react";
import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import homeStyles from "../../styles/home.styles";

import { toggleLogin } from '../../redux/actions/index'

const HomePage = () => {

  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  return (
    <ImageBackground
    source={require("../../assets/images/home_background.jpg")}
    style={homeStyles.image}
    >
      <View style={homeStyles.container}>
        <Text style={homeStyles.text}>TECH.LOG</Text>
        <TouchableOpacity 
          title="Get Started"
          key={login}
          onPress={() => {dispatch(toggleLogin())}}
          style={homeStyles.btn}
        > 
          <Text style={homeStyles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomePage;