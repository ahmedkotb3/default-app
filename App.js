import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function inputHandler(text) {
    setName(text);
  }
  function addGoalHandler() {
    setCourseGoals((currentGoals) => [...currentGoals, name]);
    setName("");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          onChangeText={inputHandler}
        />
        <Button title="add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalList}>
        {courseGoals.map((goal, index) => (
          <View style={styles.listItem} key={index}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 5,
    padding: 10,
  },
  goalList: {
    flex: 4,
  },
  listItem: {
    margin: 10,
    borderRadius: 7,
    backgroundColor: "#ccc",
    padding: 10,
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
