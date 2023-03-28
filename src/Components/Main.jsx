// import { StatusBar } from 'expo-status-bar';
import React from "react";
import Constants from "expo-constants";
import { Text, View } from "react-native";
import RepostoryList from "./RepositoryList";
import AppBar from "./AppBar";
// import { Redirect, Route, Switch } from "react-router-native";
import { Route,Routes, Link, Switch, redirect } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      {/* <Link path="/" exact>
        <RepostoryList></RepostoryList>
      </Link> */}
      <Link path="/signin" exact>
        <Text>sing in </Text>
      </Link>
      <Routes>

        <Route path="/" exact Component={RepostoryList}>
          {/* <RepostoryList></RepostoryList> */}
        </Route>
        {/* <Route path="/signin" exact>
          <Text>sing in </Text>
        </Route> */}
      </Routes>
      {/* <redirect to="/" /> */}
    </View>
  );
};
export default Main;
//el flex del view es muy importante para que la viste encaje completamente en la pantalla
