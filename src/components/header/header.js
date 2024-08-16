import React from "react";
import "./header.css";
import NewTaskForm from "../new-todo";

const Header = (props) => {
  const { addTask } = props;
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addTask={addTask} />
    </header>
  );
};

export default Header;
