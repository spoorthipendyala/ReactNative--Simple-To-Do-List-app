import React, { Component } from "react";
import styles from "./AppStyles.js";
import { View, Text, StyleSheet } from "react-native";

export default class ResourceItem extends Component {
  render() {
    const { title, id } = this.props;
    return (
      <View style={itemStyles.container}>
        <Text style={itemStyles.title}>{title}</Text>
        <Text style={itemStyles.id}>{id}</Text>
      </View>
    );
  }
}

const itemStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-around",
    color: "#17202A",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    padding: 5
  },
  title: {
    flexGrow: 1,
    justifyContent: "space-around",
    color: "#17202A",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    padding: 5
  },
  id: {
    justifyContent: "space-around",
    color: "#17202A",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
    padding: 5
  }
});
