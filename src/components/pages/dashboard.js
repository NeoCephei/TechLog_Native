import React from "react";
import { View } from "react-native";
import { useSelector} from "react-redux";

import appStyles from "../../styles/app.styles";


import HomePage from './home'
import QuizPage from './quiz'

import { toggleLogin } from '../../redux/actions/index'

const Dashboard = () => {

  const login = useSelector((state) => state.login);


  return (
    <View style={appStyles.container}>
      {login 
        ? <QuizPage />
        : <HomePage />}
    </View>
  );
};

export default Dashboard;