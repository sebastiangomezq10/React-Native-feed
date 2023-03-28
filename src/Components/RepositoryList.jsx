import React from "react";
import Constants from "expo-constants";
import { Text, View,FlatList } from "react-native";
import repositories from "../data/repositories";
import RepostoryItem from "./RepositoryItem";

const RepostoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={()=><Text></Text>}
      renderItem={({ item: repo }) => (
        <RepostoryItem {...repo}></RepostoryItem>
      )}
    />
  );
};

export default RepostoryList;
