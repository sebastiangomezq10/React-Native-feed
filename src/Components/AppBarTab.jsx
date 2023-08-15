import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import StyledText from "./StyledText";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});
const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname == to;
  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};
export default AppBarTab;
