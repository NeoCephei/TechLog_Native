import { StatusBar } from "expo-status-bar";

import React from "react";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import { Image, View } from "react-native";

import reducers from "./src/redux/configureStore";

import appStyles from "./src/styles/app.styles";

import Dashboard from "./src/components/pages/dashboard";

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <View style={appStyles.container}>
        <Dashboard />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
