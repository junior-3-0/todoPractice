import React, { Component } from "react";
import NewTaskForm from "../new-todo";

import "./header.css";

export default class Header extends Component {
  render() {
    const { addTask } = this.props;

    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
    );
  }
}
