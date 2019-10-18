import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  _onPressButton(name, pass) {
    console.log("name: " + name + " pass: " + pass);
    if (name === "admin" && pass === "admin") {
      //new page
      alert("Correct password and usernmae");
      this.props.navigation.navigate("Detail");
    } else {
      //error page
      alert("Incorrect password or username or both");
    }
  }
  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.text}>Tak testowo Login</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => {
            this.setState({ username: text });
          }}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => {
            this.setState({ password: text });
          }}
        />
        <Button
          onPress={this._onPressButton.bind(
            this,
            this.state.username,
            this.state.password
          )}
          title="Logowanie"
          style={styles.butt}
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

const styles = StyleSheet.create({
  butt: {
    //choja tam nie działa
    marginVertical: "100em",
    lineHeight: "600em"
  },
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },

  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  }
});
export const Apps = createBrowserApp(AppNavigator);
