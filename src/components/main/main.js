import React from "react";
import TaskList from "../todo-list/todo-list";
import "./main.css";
import Footer from "../footer";

const Main = ({ todos, completedTask, deleteTask }) => {
  return (
    <section className="main">
      <TaskList todos={todos} deleteTask={deleteTask} />
      <Footer />
    </section>
  );
};

export default Main;
