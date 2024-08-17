import React, { Component } from "react";
import { PropTypes } from "prop-types";
import CreatedTime from "../created-time";

import "./todo-list-item.css";

export default class Task extends Component {
  static defaultProps = {
    todo: { description: "default", id: 1, done: false },
    deleteTask: (id) => {
      this.setState(({ todos }) => {
        const updateTodos = todos.filter((item) => item.id !== id);

        return {
          todos: updateTodos,
        };
      });
    },
    completedTask: (id) => {
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
    },
  };

  static propTypes = {
    todo: PropTypes.shape({
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
    }),
    deleteTask: PropTypes.func.isRequired,
    completedTask: PropTypes.func.isRequired,
  };

  state = {
    edit: false,
    description: "",
  };

  onDescriptionEditing = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onEditing = () => {
    this.setState(({ edit }) => {
      return {
        edit: !edit,
      };
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.editingTask(this.state.description, this.props.todo.id);
    this.setState((state) => {
      return {
        description: "",
        edit: !this.state.edit,
      };
    });
  };

  render() {
    const { description, id, done } = this.props.todo;
    const { deleteTask, completedTask } = this.props;
    const { edit } = this.state;

    let inputClassName = "edit";
    let classNames = "";
    if (done) {
      classNames = "completed";
    }
    if (edit) {
      inputClassName = "edit";
      classNames = "editing";
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={done ? true : false}
            onChange={() => completedTask(id)}
          />
          <label>
            <span className="description">{description}</span>
            <CreatedTime className="created" {...this.props.todo} />
          </label>
          <button className="icon icon-edit" onClick={this.onEditing}></button>
          <button
            className="icon icon-destroy"
            onClick={() => deleteTask(id)}
          ></button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className={inputClassName}
            placeholder="Editing task"
            onChange={this.onDescriptionEditing}
            value={this.state.description}
          />
        </form>
      </li>
    );
  }
}
