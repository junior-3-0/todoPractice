import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import './new-todo.css'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
    }
  }

  onDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { addTask } = this.props
    const { description } = this.state
    addTask(description)
    this.setState({
      description: '',
    })
  }

  render() {
    const { description } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onDescriptionChange}
          value={description}
        />
      </form>
    )
  }
}

NewTaskForm.defaultProps = {
  addTask: (text) => {
    const newTodo = this.createTask(text)

    this.setState(({ todos }) => {
      const newTodos = [...todos, newTodo]

      return {
        todos: newTodos,
      }
    })
  },
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
}
