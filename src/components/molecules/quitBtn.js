import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {toggleLogin} from '../../redux/actions'

const QuitBtn = () => {

  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  return (
    <View style={quitBtnStyles.container}>
      <TouchableOpacity 
        title="Get Started"
        key={login}
        onPress={() => {dispatch(toggleLogin())}}
        style={quitBtnStyles.btn}
      > 
        <Text style={quitBtnStyles.btnText}>x</Text>
      </TouchableOpacity>
    </View>
  )
}

export default QuitBtn;

const quitBtnStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btn: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    height: 40,
    width: 40,
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor:'#dcdae2',
  
    borderWidth: 3,
    borderColor:'#2B2A2F',
  },
  btnText: {
    fontSize: 20,
    color: "#000",
  }
})