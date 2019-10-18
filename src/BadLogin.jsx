import React, { Component } from "react";
import { Text, View } from "react-native";

export class BadLogin extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Bad Login</Text>
      </View>
    );
  }
}
