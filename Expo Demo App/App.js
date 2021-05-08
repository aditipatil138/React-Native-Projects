import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, {flex: 5}]}>Hello Everyone </Text>
      <Text style={[styles.sectionTitle, {flex: 4}]}>Welcome To the App </Text>
      <Text style={[styles.sectionTitle, {flex: 3}]}>Thank You for the visit! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: 'orange',
    justifyContent: 'space-around',
    //alignItems: 'center',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'blue',
    backgroundColor: 'grey',
    margin: 10
  }
});
