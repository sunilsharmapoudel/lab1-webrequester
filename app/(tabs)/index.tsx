import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}> 🧑🏻‍💻 Labs</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View>
            <Pressable
              style={styles.list}
              onPress={() => navigation.navigate("lab1screen")}
            >
              <Text style={styles.listText}>Lab 1</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
            <Pressable style={styles.list}>
              <Text style={styles.listText}>Lab 2</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
            <Pressable style={styles.list}>
              <Text style={styles.listText}>Lab 3</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
            <Pressable style={styles.list}>
              <Text style={styles.listText}>Lab 4</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
            <Pressable style={styles.list}>
              <Text style={styles.listText}>Lab 5</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
            <Pressable style={styles.list}>
              <Text style={styles.listText}>Lab 6</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
            <Pressable style={styles.list}>
              <Text style={styles.listText}>Lab 7</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
            <Pressable style={styles.list}>
              <Text style={styles.listText}>Lab 8</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
            <Pressable style={styles.list}>
              <Text style={styles.listText}>Lab 9</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
            <Pressable style={styles.list}>
              <Text style={styles.listText}>Lab 10</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
            <Pressable style={styles.list}>
              <Text style={styles.listText}>Lab 11</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
            <Pressable style={styles.list}>
              <Text style={styles.listText}>Lab 12</Text>
              <Text style={styles.listText}> March-24</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eaeaea",
  },

  title: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 4,
    borderRadius: 6,
    borderColor: "#20232a",
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },

  scrollContainer: {},

  list: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#1731c5b7",
    borderBottomWidth: 6,
    borderRightWidth: 6,
    borderRadius: 6,
    borderBottomColor: "#2d10e6",
    borderRightColor: "#2d10e6",
  },

  listText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
