const initialState = 60

const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'TIMER_COUNTDOWN': {
      return state--;
    }
    case 'TIMER_RESET': {
      return initialState;
    }
    default:
      return state
  }
}

export default timer;