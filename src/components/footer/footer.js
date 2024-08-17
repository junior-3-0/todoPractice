import React, { Component } from "react";
import TasksFilter from "../filter";
import { PropTypes } from "prop-types";

import "./footer.css";

export default class Footer extends Component {
  static defaultProps = {
    notCompleted: () => {
      return this.state.todos.filter((item) => !item.done).length;
    },
    clearCompleted: () => {
      const newTodos = this.state.todos.filter((item) => !item.done);
      this.setState({ todos: newTodos });
    },
  };

  static propTypes = {
    notCompleted: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
  };

  render() {
    const { notCompleted, clearCompleted } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{notCompleted()} items left</span>
        <TasksFilter {...this.props} />
        <button className="clear-completed" onClick={() => clearCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }
}
