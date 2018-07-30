import React, { Component } from "react";
import axios from "axios";
import HomeView from "./HomeView.js";

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      ebookTitles: [],
      existingTasks: []
    };
  }

  async componentDidMount() {
    console.log("did mount");
    try {
      const res = await axios.get(
        "https://www.geniusplaza.com/apiprek?language=1&ageGroup=4"
      );

      const titles = res.data.results.ebooks.map(el => {
        return {
          title: el.title,
          id: el.id
        };
      });
      console.log(titles);
      this.setState({ ebookTitles: titles });
    } catch (err) {
      console.log(err);
    }
  }

  addNote = item => {
    this.setState(prevState => {
      const newExistingTasks = [...prevState.existingTasks, { key: item }];
      return {
        item: "",
        existingTasks: newExistingTasks
      };
    });
  };

  deleteItem = item => {
    this.setState(prevState => {
      const newArray = this.state.existingTasks.slice();
      const index = newArray.indexOf(item);
      newArray.splice(index, 1);
      return {
        existingTasks: newArray
      };
    });
  };

  updateText = text => {
    this.setState({ item: text });
  };


  render() {
    return (
      <HomeView
        existingTasks={this.state.existingTasks}
        addNote={this.addNote}
        deleteItem={this.deleteItem}
        item={this.state.item}
        ebookTitles={this.state.ebookTitles}
        updateText={this.updateText}
      />
    );
  }
}
