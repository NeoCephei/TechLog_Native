import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import QuitBtn from '../molecules/quitBtn'
import Countdown from "../molecules/countdown"
import QuestionIndicator from "../molecules/questionIndicator";

const TopInfo = () => {

  const {index} = useSelector(state => state.questions);

  return (
    <View style={topInfoStyles.container}>
      <View style={topInfoStyles.items}>
        <QuestionIndicator />
      </View>
      <View style={topInfoStyles.items}>
        <Countdown questionIndex={index}/>
      </View>
      <View style={topInfoStyles.items}>
        <QuitBtn />
      </View>
    </View>
  )
}

export default TopInfo;

const topInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    width: "100%",
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
  }
})