import React from "react";
import { Text, Image, View, StyleSheet, Platform } from "react-native";
import theme from "../theme.js";
import StyledText from "./StyledText.jsx";

const RepositoryItemHeader = ({ownerAvatarUrl, fullName, description, language} ) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight="bold">{fullName}</StyledText>
        <StyledText color="secondary">{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
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
    backgroundColor: theme.colors.primary,
    // backgroundColor: Platform.OS=="android"? theme.colors.primary: 'red',
    // backgroundColor: Platform.select({
    //   android: theme.colors.primary,
    //   ios: "purple",
    //   default: "orange",
    // }),
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden", //aveces se debe poner para que el radius sevea
    marginVertical: 4,
  },
  image: { width: 48, height: 48, borderRadius: 4 },
});
export default RepositoryItemHeader;
