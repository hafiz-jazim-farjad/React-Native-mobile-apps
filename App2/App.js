import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container1}>
        <Text>StopWatch App Created By Jazim</Text>
      </View>
      <View style={styles.container2}>
        <Text>{`${hours}:${minutes}:${second}:${millisecond}`}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 2,
    width: 95 + "%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "red",
  },
  container2: {
    flex: 1,
    width: 95 + "%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "red",
  },
});

let hours = 0;
let minutes = 0;
let second = 0;
let millisecond = 0;
setInterval(() => {
  millisecond++;
  if (millisecond == 99) {
    millisecond = 0;
    second++;
  } else if (second == 60) {
    second = 0;
    minutes++;
  } else if (minutes == 60) {
    minutes = 0;
    hours++;
  }
}, 1000);




