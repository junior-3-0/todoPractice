import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./filter.css";

export default class TasksFilter extends Component {
  static defaultProps = {
    currentFilter: (event) => {
      if (!event.target.closest("button")) return;
      const buttons = document
        .querySelector(".filters")
        .querySelectorAll("button");
      buttons.forEach((item) => item.classList.remove("selected"));
      event.target.classList.add("selected");

      const show = event.target.textContent;

      this.setState({ show: show });
    },
  };

  static propTypes = {
    currentFilter: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ul className="filters" onClick={this.props.currentFilter}>
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
