import React, { Component } from "react";
import styles from "./AppStyles.js";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default class TaskItem extends Component {
  render() {
    const { item, deleteItem } = this.props;

    return (
      <View style={styles.item}>
        <Text style={styles.item}>{item.key}</Text>
        <TouchableOpacity onPress={() => deleteItem(item)}>
          <Image
            style={styles.deleteIcon}
            source={{
              uri:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIESURBVGhD7do7SBxRFMbxVVGjmGCiNipBkibaCLGxEEGwENOopVUsErEQtAsEC6sE8iitLERIYVIFbSUEtUgl2PoAxSIKgggRTMTkfyADh+HecYdxZhY8H/yavTP33m+fMLOFG0wHFvATfyOcYRkDKLlM4w9cG4+yiGqURMbh2mSxpEzuacE5wps7wq7DAa4QPv4Zcs0s9IYO0Y2otGId+rxV5JoN6A0No5g04wLBeb+R62dlD7rIXRSbTehz25BK5P0/hpcRTqA34zrGZxv6XHmbuo4TL9CJ2GnAMfRCebtEL2JFfqxck+XtA2JFvg5dE+VtDkXlCT5jDa6J8rYD2d8QItMD1wSl5hUiY0Uydm2RO3ikzEBPMAU97iPf+V0eruPDwk/oV+jxesTKBPSEo8giD6HX/YREuTVF7uH+f+GXuxLBmKiBTh30eDmCZF5kC8HYqTygEv5RfQOdFehx2XwQK+KLFSFWhFgRX6wIsSLEivhiRYgVIVbEFytCrAixIr5YEWJFiBXx5boi7yFXx4X8WUDnKYIxET5XLnvq8UYEybxIWkm9yHNkkcfQ6yYuMgI94RKyyCT0uh+RKA8g98D1pN/xDm9T8gVy41OvOYjEkWdDT5q1HyhD4lThG1yLpG0fN/pHArmy/hpZ3Xv/hXk0IZVUoB196E+J3O2qRYwUCv8A1w/a2ihXT2YAAAAASUVORK5CYII="
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
