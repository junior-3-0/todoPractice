import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { PropTypes } from 'prop-types'

import './created-time.css'

export default class CreatedTime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createDate: formatDistanceToNow(props.createDate, {
        addSuffix: true,
        includeSeconds: true,
      }),
    }
  }

  componentDidMount() {
    const { interval } = this.props
    this.timerId = setInterval(() => this.tick(), interval)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    const { createDate } = this.props
    this.setState({
      createDate: formatDistanceToNow(createDate, {
        addSuffix: true,
        includeSeconds: true,
      }),
    })
  }

  render() {
    const { createDate } = this.state
    return <span className="created">created {createDate}</span>
  }
}

CreatedTime.defaultProps = {
  interval: 5000,
  createDate: new Date(),
}

CreatedTime.propTypes = {
  interval: PropTypes.number,
  createDate: PropTypes.instanceOf(Date),
}
