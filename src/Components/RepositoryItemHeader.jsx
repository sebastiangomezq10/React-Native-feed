import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import theme from "../theme.js";
import StyledText from "./StyledText.jsx";

const RepositoryItemHeader = (props) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: props.img }} />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <StyledText fontWeight="bold">Nombre: {props.nombre}</StyledText>
        <StyledText color='secondary' >Descripcion: {props.desc}</StyledText>
        <StyledText style={styles.apellido}>
          Apellidos: {props.apellido}
        </StyledText>
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
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden", //aveces se debe poner para que el radius sevea
    marginVertical:4
  },
  image: { width: 48, height: 48, borderRadius:4 },
});
export default RepositoryItemHeader;
