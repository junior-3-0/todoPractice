/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

import CreatedTime from '../created-time'
import Timer from '../timer'

import './todo-list-item.css'

function Task(props) {
  const [edit, setEdit] = useState(false)
  const [description, setDescription] = useState('')

  const { editingTask, todo, deleteTask, completedTask } = props

  const onDescriptionEditing = (event) => {
    setDescription(event.target.value)
  }

  const onEditing = () => {
    setEdit((state) => !state)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    editingTask(description, todo.id)

    setDescription('')
    setEdit((state) => !state)
  }

  const { description: title, id, done } = todo

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
          <span className="title">{title}</span>
          <Timer todo={todo} />
          <CreatedTime todo={todo} />
        </label>
        <button type="button" aria-label="edit" className="icon icon-edit" onClick={onEditing} />
        <button type="button" aria-label="destroy" className="icon icon-destroy" onClick={() => deleteTask(id)} />
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className={inputClassName}
          placeholder="Editing task"
          onChange={onDescriptionEditing}
          value={description}
        />
      </form>
    </li>
  )
}

export default Task

Task.prototype.defaultProps = {
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
