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
    borderRadius: 100,
    backgroundColor: "#228B22",
    alignSelf: "center",
    alignItems: "center",
    marginHorizontal: "1%",
    width: 40,
    height: 40,
    minWidth: 35,
    minHeight: 35,
    textAlign: "center",
    borderRadius: 20,
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
  }
})