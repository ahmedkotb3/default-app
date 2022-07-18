import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { TailwindProvider } from "tailwindcss-react-native";
import Test from "./components/test";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(goal) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goal },
    ]);
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
    console.log(courseGoals);
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        <View style={styles.appContainer}>
          <GoalInput ongoalAdd={addGoalHandler} />
          <View style={styles.goalList}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    itemData={itemData}
                    ongoalDelete={deleteGoalHandler}
                  />
                );
              }}
            ></FlatList>
          </View>
          <Test />
        </View>
      </TailwindProvider>
    </NavigationContainer>
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
