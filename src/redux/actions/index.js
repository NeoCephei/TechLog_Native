/////////login actions////////
export const toggleLogin = () => ({
  type: "TOGGLE_LOGIN",
});


/////////timer actions////////
export const timerCountdown = () => ({
  type: "TIMER_COUNTDOWN",
})
export const timerReset = () => ({
  type: "TIMER_RESET",
})


/////////timer actions////////
export const addLife = () => ({
  type: "ADD_LIFE",
})
export const loseLife = () => ({
  type: "LOSE_LIFE",
})
export const lifeReset = () => ({
  type: "RESET_LIFE",
})