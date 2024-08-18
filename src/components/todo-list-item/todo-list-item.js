import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import CreatedTime from '../created-time'

import './todo-list-item.css'

export default class Task extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      edit: false,
      description: '',
    }
  }

  onDescriptionEditing = (event) => {
    this.setState({
      description: event.target.value,
    })
  }

  onEditing = () => {
    this.setState(({ edit }) => ({
      edit: !edit,
    }))
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { editingTask, todo } = this.props
    const { description } = this.state
    editingTask(description, todo.id)
    this.setState({ description: '' })
    this.setState(({ edit }) => ({ edit: !edit }))
  }

  render() {
    const { todo } = this.props
    const { description, id, done } = todo
    const { deleteTask, completedTask } = this.props
    const { edit, stateDescription } = this.state

    let inputClassName = 'edit'
    let classNames = ''
    if (done) {
      classNames = 'completed'
    }
    if (edit) {
      inputClassName = 'edit'
      classNames = 'editing'
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={done} onChange={() => completedTask(id)} />
          <label htmlFor="description">
            <span className="description">{description}</span>
            <CreatedTime className="created" todo={todo} />
          </label>
          <button aria-label="Editing" type="button" className="icon icon-edit" onClick={this.onEditing} />
          <button aria-label="Deleted" type="button" className="icon icon-destroy" onClick={() => deleteTask(id)} />
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className={inputClassName}
            placeholder="Editing task"
            onChange={this.onDescriptionEditing}
            value={stateDescription}
          />
        </form>
      </li>
    )
  }
}

Task.defaultProps = {
  todo: { description: 'default', id: 1, done: false },
  deleteTask: (id) => {
    this.setState(({ todos }) => {
      const updateTodos = todos.filter((item) => item.id !== id)

      return {
        todos: updateTodos,
      }
    })
  },
  completedTask: (id) => {
    this.setState(({ todos }) => {
      const newTodos = todos.map((item) => {
        if (item.id !== id) return item
        const newDone = { done: !item.done }
        const newItem = Object.assign(item, newDone)
        return newItem
      })
      return {
        todos: newTodos,
      }
    })
  },
  editingTask: (text, id) => {
    if (!text) return
    const { todos } = this.state
    const newTodos = todos.map((item) => {
      if (item.id !== id) {
        return item
      }
      const newDescr = { description: text }
      const newItem = Object.assign(item, newDescr)
      return newItem
    })
    this.setState({
      todos: newTodos,
    })
  },
}

Task.propTypes = {
  todo: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
  }),
  deleteTask: PropTypes.func,
  completedTask: PropTypes.func,
  editingTask: PropTypes.func,
}
