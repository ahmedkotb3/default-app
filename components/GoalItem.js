import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ itemData, ongoalDelete }) {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={ongoalDelete.bind(this, itemData.key)}
        style={() => {}}
      >
        <Text style={styles.goalText}>{itemData.item.value}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    margin: 10,
    borderRadius: 7,
    backgroundColor: "#ccc",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 10,
  },
});
