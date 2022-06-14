import { StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from "react";

function GoalInput({ ongoalAdd }) {
  const [goal, setGoal] = useState("");

  function inputHandler(text) {
    setGoal(text);
  }

  function addGoalHandler() {
    ongoalAdd(goal);
    setGoal("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        onChangeText={inputHandler}
        value={goal}
      />
      <Button title="add goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
