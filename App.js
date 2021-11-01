import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Mambo !</Text>
      < Button title= "login" /> 
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6666ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});