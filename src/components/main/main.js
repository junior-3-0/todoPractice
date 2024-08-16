import React from "react";
import TaskList from "../todo-list/todo-list";
import "./main.css";
import Footer from "../footer";

const Main = ({
  todos,
  completedTask,
  deleteTask,
  currentFilter,
  notCompleted,
  clearCompleted,
  editingTask,
}) => {
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
};

export default Main;
