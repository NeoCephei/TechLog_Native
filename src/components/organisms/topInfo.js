import React from "react";
import { Text, View, StyleSheet } from "react-native";

import QuitBtn from '../molecules/quitBtn'
import Countdown from "../molecules/countdown"

const TopInfo = () => {


  return (
    <View style={topÌnfoStyles.container}>
      <View style={topÌnfoStyles.items}>
        <Text>QNumber</Text>
      </View>
      <View style={topÌnfoStyles.items}>
        <Countdown />
      </View>
      <View style={topÌnfoStyles.items}>
        <QuitBtn />
      </View>
    </View>
  )
}

export default TopInfo;

const topÌnfoStyles = StyleSheet.create({
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