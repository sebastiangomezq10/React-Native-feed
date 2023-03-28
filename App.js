import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Alert } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Main from './src/Components/Main';

export default function App() {
  return <NativeRouter>
    <Main />
  </NativeRouter>
}
