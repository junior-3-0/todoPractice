import React, { Component } from "react";
import { PropTypes } from "prop-types";

import "./new-todo.css";

export default class NewTaskForm extends Component {
  static defaultProps = {
    addTask: (text) => {
      const newTodo = this.createTask(text);

      this.setState(({ todos }) => {
        const newTodos = [...todos, newTodo];

        return {
          todos: newTodos,
        };
      });
    },
  };

  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };

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
