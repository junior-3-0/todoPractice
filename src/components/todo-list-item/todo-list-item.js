import React, { Component } from "react";
import "./todo-list-item.css";
import { formatDistanceToNow } from "date-fns";

export default class Task extends Component {
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

    const currentDate = new Date(Date.now());

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={() => completedTask(id)}
          />
          <label>
            <span className="description">{description}</span>
            <span className="created">
              {formatDistanceToNow(currentDate, {
                addSuffix: true,
                includeSeconds: true,
              })}
            </span>
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

/*       <li class="editing">
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>
            <span class="description">Editing task</span>
            <span class="created">
              {formatDistanceToNow(currentDate, {
                addSuffix: true,
                includeSeconds: true,
              })}
            </span>
          </label>
          <button class="icon icon-edit"></button>
          <button class="icon icon-destroy"></button>
        </div>
        
      </li> */
