const initialState = 3

const lifes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIFE': {
      return state + 1;
    }
    case 'LOSE_LIFE': {
      return state - 1;
    }
    case 'RESET_LIFE': {
      return initialState;
    }
    default:
      return state
  }
}

export default lifes;