import React from 'react'
import { PropTypes } from 'prop-types'
import './filter.css'

function TasksFilter(props) {
  const { currentFilter } = props

  return (
    // eslint-disable-next-line
    <ul className="filters" onClick={currentFilter}>
      <li>
        <button aria-label="all" type="button" className="selected">
          All
        </button>
      </li>
      <li>
        <button aria-label="active" type="button">
          Active
        </button>
      </li>
      <li>
        <button aria-label="completed" type="button">
          Completed
        </button>
      </li>
    </ul>
  )
}

TasksFilter.prototype.defaultProps = {
  currentFilter: (event) => {
    if (!event.target.closest('button')) return
    const buttons = document.querySelector('.filters').querySelectorAll('button')
    buttons.forEach((item) => item.classList.remove('selected'))
    event.target.classList.add('selected')

    const show = event.target.textContent

    this.setState({ show })
  },
}

TasksFilter.prototype.propTypes = {
  currentFilter: PropTypes.func,
}

export default TasksFilter
