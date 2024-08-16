import React, { Component } from "react";
import Header from "../header";
import Main from "../main";
import "./app.css";

export default class App extends Component {
  startId = 10;

  state = {
    todos: [
      this.createTask("completed task"),
      this.createTask("editing task"),
      this.createTask("Active task"),
    ],
    show: "",
  };

  notCompleted = () => {
    return this.state.todos.filter((item) => !item.done).length;
  };

  clearCompleted = () => {
    const newTodos = this.state.todos.filter((item) => !item.done);
    this.setState({ todos: newTodos });
  };

  createTask(description) {
    return {
      id: this.startId++,
      description,
      done: false,
    };
  }

  setStateFilter = (arr) => {
    this.setState({
      todos: arr,
    });
  };

  addTask = (text) => {
    const newTodo = this.createTask(text);

    this.setState(({ todos }) => {
      const newTodos = [...todos, newTodo];

      return {
        todos: newTodos,
      };
    });
  };

  completedTask = (id) => {
    this.setState(({ todos }) => {
      const newTodos = todos.map((item) => {
        if (item.id !== id) return item;
        item.done = !item.done;
        return item;
      });
      return {
        todos: newTodos,
      };
    });
  };

  deleteTask = (id) => {
    this.setState(({ todos }) => {
      const updateTodos = todos.filter((item) => item.id !== id);

      return {
        todos: updateTodos,
      };
    });
  };

  editingTask = (text, id) => {
    if (!text) return;
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (item.id !== id) {
        return item;
      }
      item.description = text;
      return item;
    });
    this.setState({
      todos: newTodos,
    });
  };

  currentFilter = (event) => {
    if (!event.target.closest("button")) return;
    const buttons = document
      .querySelector(".filters")
      .querySelectorAll("button");
    buttons.forEach((item) => item.classList.remove("selected"));
    event.target.classList.add("selected");

    const show = event.target.textContent;

    this.setState({ show: show });
  };

  render() {
    let { todos } = this.state;
    const { show } = this.state;
    if (show === "Completed") {
      todos = todos.filter((item) => item.done);
    }
    if (show === "Active") {
      todos = todos.filter((item) => !item.done);
    }
    return (
      <section className="todoapp">
        <Header addTask={this.addTask} />
        <Main
          todos={todos}
          completedTask={this.completedTask}
          deleteTask={this.deleteTask}
          currentFilter={this.currentFilter}
          notCompleted={this.notCompleted}
          clearCompleted={this.clearCompleted}
          editingTask={this.editingTask}
        />
      </section>
    );
  }
}
