import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import theme from "../theme.js";
import RepositoryData from "./RepositoryData.jsx";
import RepositoryItemHeader from "./RepositoryItemHeader.jsx";
import StyledText from "./StyledText.jsx";
const RepostoryItem = (props) => {
  return (
    <View key={props.id.toString()} style={styles.container}>
      <RepositoryItemHeader {... props}></RepositoryItemHeader>
      <RepositoryData {... props}></RepositoryData>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 0,
  },
  text: { fontWeight: "bold", marginBottom: 5 },
  apellido: {
    padding: 4,
    color: theme.colors.white,
    // backgroundColor: theme.colors.primary,
    // backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden", //aveces se debe poner para que el radius sevea
  },
  image: { width: 48, height: 48 },
});
export default RepostoryItem;
