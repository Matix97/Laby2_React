import React from "react";
import { View, Text, Button } from "react-native";
import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen - Pokaz</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
      </View>
    );
  }
}

class Detailcreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: Detailcreen
  }
});

export const Apps = createBrowserApp(AppNavigator);
