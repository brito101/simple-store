import { StyleSheet, Text, View } from "react-native";
import React = require("react");

export default function About() {
  return (
    <View style={styles.container}>
      <Text>Fui eu quem fez!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
