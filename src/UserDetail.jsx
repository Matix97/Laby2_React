import React from "react";
import { View, Text } from "react-native";

export class UserDetail extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}
