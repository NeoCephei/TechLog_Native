// import {HEROKU_URL} from 'react-native-dotenv'

// const BASE_URL = HEROKU_URL
const BASE_URL = 'https://sleepy-dusk-62160.herokuapp.com'

async function keepServerAlive () {
  try {
    const isAlive = await fetch(`${BASE_URL}/`)
    return isAlive;
  } catch (error) {
    console.log(error);
  }
}

async function getQuestions() {
  try {
    const allQuestions = await fetch(`${BASE_URL}/questions`);
    return allQuestions.json();
  } catch (error) {
    console.log(error);
  }
}

async function postQuestion(data) {
  try {
    const newQuestion = await fetch(`${BASE_URL}/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return newQuestion.json();
  } catch (error) {
    console.log(error);
  }
}

const ApiService = {
  keepServerAlive,
  getQuestions,
  postQuestion,
};

export default ApiService;