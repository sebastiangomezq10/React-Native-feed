import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryData = (props) => {
  return (
    <View
      key={props.id}
      style={{ flexDirection: "row", justifyContent: "space-around" }}
    >
      <View>
        <StyledText aling="center" fontWeight="bold">
          Ciudad
        </StyledText>
        <StyledText aling="center">{props.ciudad}</StyledText>
      </View>
      <View>
        <StyledText aling="center" fontWeight="bold">
          Edad:{" "}
        </StyledText>
        <StyledText aling="center">{props.edad}</StyledText>
      </View>
      <View>
        <StyledText aling="center" fontWeight="bold">
          direccion:
        </StyledText>
        <StyledText aling="center"> {props.direccion}</StyledText>
      </View>
      <View>
        <StyledText aling="center" fontWeight="bold">
          Valor Hora:
        </StyledText>
        <StyledText aling="center"> {parseThousands(props.valorHora)}</StyledText>
      </View>
    </View>
  );
};
export default RepositoryData;
