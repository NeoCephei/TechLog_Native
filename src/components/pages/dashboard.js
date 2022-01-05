import React from "react";
import { View } from "react-native";
import { useSelector} from "react-redux";

import appStyles from "../../styles/app.styles";

import HomePage from './home'
import QuizPage from './quiz'
import GameOver from './gameOver'

const Dashboard = () => {

  const login = useSelector((state) => state.login);
  const lifes = useSelector((state) => state.lifes);

  function renderPage() {
    if (lifes) {
      return login ? <QuizPage /> : <HomePage />
    }
    return <GameOver />
  }

  return (
    <View style={appStyles.container}>
      {renderPage()}
    </View>
  );
};

export default Dashboard;