import React, { Component } from "react";
import "./filter.css";

export default class TasksFilter extends Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    );
  }
}
