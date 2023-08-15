// import { StatusBar } from 'expo-status-bar';
import React from "react";
import Constants from "expo-constants";
import { Platform, Text, View } from "react-native";
import RepostoryList from "./RepositoryList";
import AppBar from "./AppBar";
// import { Redirect, Route, Switch } from "react-router-native";
import { Route, Routes, Redirect } from "react-router-native";
import LogInPage from "../pages/Login";
// const AppBar = Platform.select({
//   ios: () => require("./IosAppBar").default,
//   default: () => require("./AppBar").default,
// })();

const NoMatch = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Ups parece que estas perdido</Text>
    </View>
  );
};
const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" exact Component={RepostoryList} />
        <Route path="/signin" exact Component={LogInPage} />
        {/* <Redirect from="/old-match" to="/will-match" /> */}
        {/* <Route component={NoMatch} /> */}
      </Routes>
    </View>
  );
};
export default Main;
//el flex del view es muy importante para que la viste encaje completamente en la pantalla
