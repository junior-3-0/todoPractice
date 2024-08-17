import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { formatDistanceToNow } from "date-fns";

import "./created-time.css";

export default class CreatedTime extends Component {
  static defaultProps = {
    interval: 5000,
    createDate: new Date(),
  };

  static propTypes = {
    interval: PropTypes.number,
    createDate: PropTypes.any.isRequired,
  };

  state = {
    createDate: formatDistanceToNow(this.props.createDate, {
      addSuffix: true,
      includeSeconds: true,
    }),
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      createDate: formatDistanceToNow(this.props.createDate, {
        addSuffix: true,
        includeSeconds: true,
      }),
    });
  }

  render() {
    const { createDate } = this.state;
    return <span className="created">created {createDate}</span>;
  }
}
