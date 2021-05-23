import React, { Component } from "react";

class UserInput extends Component {
  state = {
    name: ""
  };

  updateName = (event) => this.setState({ name: event.target.value });
  handleSubmit = (event) => {
    event.preventDefault();
    //call your addName method with the name that you want to add to the array of names.
    this.props.addName(this.state.name);
    //initialize the state property names as an empty array.
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new name here..."
          value={this.state.name}
          onChange={this.updateName}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
