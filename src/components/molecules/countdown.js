import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {timerCountdown, timerReset} from '../../redux/actions'

const Countdown = () => {

  const dispatch = useDispatch();
  // const timer = useSelector((state) => state.timer);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(timer) 
  //     if (timer > 0) {
  //       dispatch(timerCountdown());
  //     } else {
  //       dispatch(timerReset());
  //     }
  //   }, 1000);
  // }, [timer])

  const [secondsLeft, setSecondsLeft] = useState(60)

  function fakeTimer(callback, delay) {
    const savedCb = useRef();

    useEffect(() => {
      savedCb.current = callback;
    },[callback])

    useEffect(() => {
      function tick() {
        savedCb.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }

  fakeTimer(
    () => {
      if (secondsLeft > 0) {
        setSecondsLeft(secondsLeft - 1)
      } else {
        setSecondsLeft(60)
      }
    },
    1000
  )

  return (
    <View style={countdownStyles.container}>
      <Text style={{color: 'white'}}>
        {secondsLeft}
      </Text>
    </View>
  )
}

export default Countdown;

const countdownStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
})