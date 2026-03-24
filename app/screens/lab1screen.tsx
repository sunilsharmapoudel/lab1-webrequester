import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Lab1Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🧑🏻‍💻 Lab 1</Text>
      <Text>Here you can put all content for Lab 1.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
});

export default Lab1Screen;
