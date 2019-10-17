import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
  FlatList
} from "react-native";
import MessageRequest from "./Assistant";

export default class App extends React.Component {
  state = {
    context: {},
    userInput: "",
    messages: []
  };

  async componentDidMount() {
    const response = await MessageRequest();
    this.setState({
      messages: [{ id: "watson", text: response.output.text.join(" ") }],
      context: response.context
    });
  }

  inputUpdate = text => {
    this.setState({
      userInput: text
    });
    console.log("this.state.userInput :", this.state.userInput);
  };

  sendRequest = async () => {
    const response = await MessageRequest(
      this.state.userInput,
      this.state.context
    );
    console.log("response :", response);
    this.setState({
      messages: [
        ...this.state.messages,
        { id: "user", text: this.state.userInput },
        { id: "watson", text: response.output.text.join(" ") }
      ],
      context: response.context
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Connect.tech!</Text>
        <TextInput
          placeholder="Enter yes or no"
          style={styles.input}
          onChangeText={this.inputUpdate}
        />
        <TouchableOpacity style={styles.button} onPress={this.sendRequest}>
          <Text>Send request!</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.messages}
          renderItem={({ item }) => (
            <Text style={item.id === "watson" ? styles.watson : styles.user}>
              {item.text}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  user: {
    backgroundColor: "blue",
    alignSelf: "flex-end",
    color: "white"
  },
  watson: {
    backgroundColor: "purple",
    alignSelf: "flex-start",
    color: "white"
  },
  button: {
    backgroundColor: "yellow",
    alignItems: "center"
  },
  input: {
    borderWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  }
});
