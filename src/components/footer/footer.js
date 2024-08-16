import React from "react";
import "./footer.css";
import TasksFilter from "../filter";

const Footer = (props) => {
  const { notCompleted, clearCompleted } = props;

  return (
    <footer className="footer">
      <span className="todo-count">{notCompleted()} items left</span>
      <TasksFilter {...props} />
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
