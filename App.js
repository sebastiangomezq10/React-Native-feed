import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Alert } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (<>
    <StatusBar style='light' />
    <NativeRouter>
      <Main />
    </NativeRouter>
  </>
  )
}
