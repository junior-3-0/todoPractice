import React, { Component } from "react";
import TaskList from "../todo-list/todo-list";
import "./main.css";
import Footer from "../footer";

export default class Main extends Component {
  render() {
    const {
      todos,
      completedTask,
      deleteTask,
      currentFilter,
      notCompleted,
      clearCompleted,
      editingTask,
    } = this.props;

    return (
      <section className="main">
        <TaskList
          todos={todos}
          deleteTask={deleteTask}
          completedTask={completedTask}
          editingTask={editingTask}
        />
        <Footer
          notCompleted={notCompleted}
          currentFilter={currentFilter}
          clearCompleted={clearCompleted}
        />
      </section>
    );
  }
}
