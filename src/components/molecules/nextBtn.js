import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";


const NextBtn = () => {

  return (
    <View style={nextBtnStyles.container}>
      <TouchableOpacity 
        title='Next Question'
        key='next'
        onPress={() => console.log('Next question')}
        style={nextBtnStyles.btn}
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
  btnText: {
    fontSize: 20,
    color: "#000",
  }
})