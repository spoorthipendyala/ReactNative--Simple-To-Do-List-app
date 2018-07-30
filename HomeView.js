import React, { Component } from "react";
import styles from "./AppStyles.js";
import ResourceItem from "./ResourceItem.js";
import TaskItem from "./TaskItem.js";
import {
  TouchableOpacity,
  FlatList,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  CheckBox
} from "react-native";

export default ({
  existingTasks,
  ebookTitles,
  item,
  addNote,
  deleteItem,
  updateText
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>eBooks List</Text>
    <FlatList
      style={styles.list}
      data={ebookTitles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <ResourceItem title={item.title} id={item.id} />
      )}
    />
    <TextInput
      style={styles.textInput}
      placeholder="Add Task"
      onChangeText={item => updateText(item)}
      value={item}
    />
    <TouchableOpacity style={styles.buttonAdd} onPress={() => addNote(item)}>
      <Text style={styles.textButton}> Add Task </Text>
    </TouchableOpacity>

    <FlatList
      style={styles.list}
      data={existingTasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TaskItem item={item} deleteItem={deleteItem} />
      )}
    />
  </View>
);
