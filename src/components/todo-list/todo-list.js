import React, { Component } from "react";
import "./todo-list.css";
import Task from "../todo-list-item";

export default class TaskList extends Component {
  render() {
    const { todos, deleteTask, completedTask, editingTask } = this.props;
    const element = todos.map((item) => {
      const { id } = item;
      return (
        <Task
          todo={item}
          key={id}
          deleteTask={deleteTask}
          completedTask={completedTask}
          editingTask={editingTask}
        />
      );
    });

    return <ul className="todo-list">{element}</ul>;
  }
}
