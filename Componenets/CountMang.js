import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{count}</Text>
      <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <Button title="-" onPress={handleDecrement} />
        </View>
        <View style={styles.buttonSpacer}></View>
        <View style={styles.buttonContainer}>
        <Button title="+" onPress={handleIncrement} />
        </View>
      </View>
      <View style={styles.resetContainer}>
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer:{
    width:50,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSpacer: {
    width: 20, 
  },
  resetContainer: {
    marginTop: 20,
    width:100
  },
});

export default Counter;
