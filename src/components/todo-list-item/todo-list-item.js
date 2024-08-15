import React, { Component } from "react";
import "./todo-list-item.css";
import { formatDistanceToNow } from "date-fns";

export default class Task extends Component {
  state = {
    done: false,
  };

  completedTask = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  render() {
    const { description, id } = this.props.todo;
    const { done } = this.state;
    const { deleteTask } = this.props;

    let classNames = "";
    if (done) {
      classNames = "completed";
    }

    const currentDate = new Date(Date.now());

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={this.completedTask}
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
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={() => deleteTask(id)}
          ></button>
        </div>
      </li>
    );
  }
}

/* <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">completed task</span>
            <span className="created">
              {formatDistanceToNow(currentDate, {
                addSuffix: true,
                includeSeconds: true,
              })}
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>

      <li class="editing">
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
        <input type="text" class="edit" value="Editing task" />
      </li> */
