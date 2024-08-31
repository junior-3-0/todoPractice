import React, { useState } from 'react'

import Header from '../header'
import Main from '../main'
import useLocalStorage from '../hooks/localStorage'
import './app.css'

function App() {
  let startId = 10

  const createTask = (description) => {
    startId += 1
    return {
      id: startId,
      description,
      done: false,
      createDate: new Date(),
    }
  }

  const [todos, setTodos] = useLocalStorage(
    [createTask('completed task'), createTask('editing task'), createTask('Active task')],
    'TODOS'
  )
  const [show, setShow] = useState('')

  const notCompleted = () => {
    const todo = todos.filter((item) => !item.done).length
    return todo
  }

  const clearCompleted = () => {
    const newTodos = todos.filter((item) => !item.done)
    setTodos(newTodos)
  }

  const addTask = (text) => {
    if (!text) return
    const newTodo = createTask(text)

    setTodos([...todos, newTodo])
  }

  const completedTask = (id) => {
    setTodos((currTodos) => {
      const newTodos = currTodos.map((item) => {
        if (item.id !== id) return item
        const newDone = { done: !item.done }
        const newItem = Object.assign(item, newDone)
        return newItem
      })
      return newTodos
    })
  }

  const deleteTask = (id) => {
    setTodos((currTodos) => {
      const updateTodos = currTodos.filter((item) => item.id !== id)
      return updateTodos
    })
  }

  const editingTask = (text, id) => {
    if (!text) return
    const newTodos = todos.map((item) => {
      if (item.id !== id) {
        return item
      }
      const newDescr = { description: text }
      const newItem = Object.assign(item, newDescr)
      return newItem
    })
    setTodos(newTodos)
  }

  const currentFilter = (event) => {
    if (!event.target.closest('button')) return
    const buttons = document.querySelector('.filters').querySelectorAll('button')
    buttons.forEach((item) => item.classList.remove('selected'))
    event.target.classList.add('selected')

    const newShow = event.target.textContent

    setShow(newShow)
  }

  let todosVisible = todos

  if (show === 'Completed') {
    todosVisible = todos.filter((item) => item.done)
  }
  if (show === 'Active') {
    todosVisible = todos.filter((item) => !item.done)
  }

  return (
    <section className="todoapp">
      <Header addTask={addTask} />
      <Main
        todos={todosVisible}
        completedTask={completedTask}
        deleteTask={deleteTask}
        currentFilter={currentFilter}
        notCompleted={notCompleted}
        clearCompleted={clearCompleted}
        editingTask={editingTask}
      />
    </section>
  )
}

export default App
