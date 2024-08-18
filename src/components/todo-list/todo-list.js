import React from 'react'

import './todo-list.css'
import Task from '../todo-list-item'

function TaskList(prop) {
  const { todos, deleteTask, completedTask, editingTask } = prop
  const element = todos.map((item) => {
    const { id } = item
    return <Task todo={item} key={id} deleteTask={deleteTask} completedTask={completedTask} editingTask={editingTask} />
  })

  return <ul className="todo-list">{element}</ul>
}

export default TaskList
