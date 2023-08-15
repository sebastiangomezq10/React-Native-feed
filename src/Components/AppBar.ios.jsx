import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection: "row",
    paddingLeft: 10,
  },
  scroll: {
    paddingBottom: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});
const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab active to="/">
          Repositories a
        </AppBarTab>
        <AppBarTab to="/signin">singin</AppBarTab>
      </ScrollView>
    </View>
  );
};
export default AppBar;
