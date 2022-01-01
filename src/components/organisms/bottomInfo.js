import React from "react";
import { View, StyleSheet } from "react-native";

import NextBtn from '../molecules/nextBtn'
import QuestionInformation from '../molecules/questionInformation'
import LiveCounter from '../molecules/liveCounter'


const BottomInfo = () => {

  return (
    <View style={bottomÌnfoStyles.container}>
      <NextBtn />
      <QuestionInformation />
      <LiveCounter />
    </View>
  )
}

export default BottomInfo;

const bottomÌnfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
})