import React from "react";
import { Image, TouchableOpacity, View, StyleSheet } from "react-native";

const QuestionInformation = () => {

  return (
    <View style={questionInformationStyles.container}>
      <TouchableOpacity onPress={() => console.log('Tell me why')}>
        <Image
          source={require('../../assets/icons/information.png')}
          style={questionInformationStyles.icons}
        />
      </TouchableOpacity>
    </View>
  )
}

export default QuestionInformation;

const questionInformationStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: "center",
    alignItems: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    width: "10%",
    textAlign: "center",
    borderRadius: 20,
  },
  icons: {
    resizeMode : 'contain',
    height: 40,
    width: 40,
  }
})