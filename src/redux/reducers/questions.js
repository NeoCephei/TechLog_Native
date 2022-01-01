const initialState = {
  questions: [],
  index: 0,
  answered: false
}

const questions = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_QUESTIONS': {
      return {...state, questions: [...action.payload]};
    }
    case 'NEXT_QUESTION': {
      return {...state, index: state.index + 1, answered: false};
    }
    case 'ANSWERED_QUESTION': {
      return {...state, answered: true};
    }
    case 'RESET_QUESTIONS': {
      return initialState;
    }
    default:
      return state
  }
}

export default questions;