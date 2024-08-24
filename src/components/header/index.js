import React from 'react'

import NewTaskForm from '../new-todo'

import './header.css'

function Header(prop) {
  const { addTask } = prop
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addTask={addTask} />
    </header>
  )
}

export default Header
