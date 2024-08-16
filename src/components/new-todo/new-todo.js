import React, { Component } from "react";
import "./new-todo.css";

export default class NewTaskForm extends Component {
  state = {
    description: "",
  };

  onDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.description);
    this.setState({
      description: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onDescriptionChange}
          value={this.state.description}
        />
      </form>
    );
  }
}
