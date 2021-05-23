import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: ["Erin", "Ann", "Nichole", "Sharon", "Maryn"]
  };

  //write an addName method that will add a new name to the names array in state.
  addName = (name) => {
    const newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
  };

  removeName = (clickedIndex) => {
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };

  //Pull the saved value when the UI is reopened
  componentDidMount() {
    const savedNamesString = localStorage.getItem("savedNames");
    if (savedNamesString) {
      const savedNames = JSON.parse(savedNamesString);
      this.setState({ names: savedNames });
    }
  }
  //Save state to the browser’s storage after each re-render
  componentDidUpdate() {
    const savedNamesString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNames", savedNamesString);
  }
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
