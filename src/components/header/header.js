import React from "react";
import "./header.css";
import NewTaskForm from "../new-todo";

const Header = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm />
    </header>
  );
};

export default Header;
