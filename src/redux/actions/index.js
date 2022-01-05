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


/////////lifes actions////////
export const addLife = () => ({
  type: "ADD_LIFE",
})
export const loseLife = () => ({
  type: "LOSE_LIFE",
})
export const lifeReset = () => ({
  type: "RESET_LIFE",
})



/////////questions actions////////
export const addQuestions = (questions) => ({
  type: "ADD_QUESTIONS",
  payload: questions
})
export const nextQuestion = () => ({
  type: "NEXT_QUESTION",
})
export const answerQuestion = () => ({
  type: "ANSWERED_QUESTION",
})
export const resetQuestion = () => ({
  type: "RESET_QUESTIONS",
})