import React, {useEffect} from "react";
import { Image, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const LiveCounter = () => {

  const lifes = useSelector((state) => state.lifes);

  const hearts = new Array(lifes).fill(null).map((el, i) => {
    return <Image
      source={require('../../assets/icons/heart.png')}
      key={i}
      style={liveCounterStyles.icons}
    />
  });

  return (
    <View style={liveCounterStyles.container}>
      {hearts}
    </View>
  )
}

export default LiveCounter;

const liveCounterStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icons: {
    resizeMode : 'contain',
    height: 38,
    width: 38,
  }
})