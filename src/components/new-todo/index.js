import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

import './new-todo.css'

function NewTaskForm(props) {
  const [description, setDescription] = useState('')

  const onDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const { addTask } = props

    addTask(description)
    setDescription('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={onDescriptionChange}
        value={description}
      />
    </form>
  )
}

export default NewTaskForm

NewTaskForm.prototype.defaultProps = {
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
