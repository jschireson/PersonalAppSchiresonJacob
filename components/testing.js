import React from "react";
import { Text, View } from "react-native";

export default function App() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
            Tim Hickey's Great App!!!
        </Text>
        <StatusBar style="auto" />
      </View>
    );
  }