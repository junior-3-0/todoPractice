import React, { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'

import './created-time.css'

function CreatedTime(props) {
  const { todo } = props
  const interval = 15000

  const [createdDate, setCreatedDate] = useState(
    formatDistanceToNow(todo.createDate, {
      addSuffix: true,
      includeSeconds: true,
    })
  )

  const tick = () => {
    setCreatedDate(
      formatDistanceToNow(todo.createDate, {
        addSuffix: true,
        includeSeconds: true,
      })
    )
  }

  useEffect(() => {
    const timerId = setInterval(() => tick(), interval)

    return () => clearInterval(timerId)
  }, [])

  return <span className="created">created {createdDate}</span>
}

export default CreatedTime
