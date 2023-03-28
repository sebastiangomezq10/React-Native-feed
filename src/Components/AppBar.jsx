import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});
const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight='bold' style={styles.text}>Repositories</StyledText>
    </View>
  );
};
export default AppBar;
