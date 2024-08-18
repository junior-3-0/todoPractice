import React from 'react'
import { PropTypes } from 'prop-types'

import TasksFilter from '../filter'

import './footer.css'

function Footer(props) {
  const { notCompleted, clearCompleted, currentFilter } = props
  return (
    <footer className="footer">
      <span className="todo-count">{notCompleted()} items left</span>
      <TasksFilter currentFilter={currentFilter} />
      <button aria-label="clear-completed" type="button" className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.prototype.defaultProps = {
  notCompleted: () => this.state.todos.filter((item) => !item.done).length,
  clearCompleted: () => {
    const newTodos = this.state.todos.filter((item) => !item.done)
    this.setState({ todos: newTodos })
  },
  currentFilter: (event) => {
    if (!event.target.closest('button')) return
    const buttons = document.querySelector('.filters').querySelectorAll('button')
    buttons.forEach((item) => item.classList.remove('selected'))
    event.target.classList.add('selected')

    const show = event.target.textContent

    this.setState({ show })
  },
}

Footer.prototype.propTypes = {
  notCompleted: PropTypes.func,
  clearCompleted: PropTypes.func,
  currentFilter: PropTypes.func,
}

export default Footer
