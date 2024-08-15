import React, { Component } from "react";
import Header from "../header";
import Main from "../main";
import "./app.css";

export default class App extends Component {
  state = {
    todos: [
      { id: 11, description: "completed task" },
      { id: 21, description: "editing task" },
      { id: 34, description: "Active task" },
    ],
  };

  deleteTask = (id) => {
    this.setState(({ todos }) => {
      const updateTodos = todos.filter((item) => item.id !== id);

      return {
        todos: updateTodos,
      };
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <section className="todoapp">
        <Header />
        <Main
          todos={todos}
          completedTask={this.completedTask}
          deleteTask={this.deleteTask}
        />
      </section>
    );
  }
}
