import React, { useEffect, useState } from 'react'

import useLocalStorage from '../hooks/localStorage'

function Timer(props) {
  const { todo } = props
  const [time, setTime] = useLocalStorage(Date.now(), `time${todo.id}`)
  const [outputTime, setOutputTime] = useLocalStorage(null, `outputTime${todo.id}`)
  const [playTimer, setPlayTimer] = useState(false)
  let interval

  const play = () => {
    let date = Date.now()
    if (outputTime) {
      date = Date.now() - (+outputTime.split(':')[0] * 1000 + +outputTime.split(':')[1] * 1000)
    }
    setTime(date)
    setPlayTimer(true)
  }

  const tick = () => {
    clearInterval(interval)

    const difference = (Date.now() - time) / 1000

    let seconds = Math.floor(difference % 60)
    let minutes = Math.floor(difference / 60)

    if (seconds < 10) seconds = `0${seconds}`
    if (minutes < 10) minutes = `0${minutes}`

    setOutputTime(`${minutes}:${seconds}`)

    interval = setInterval(tick, 1000)
  }

  const stop = () => {
    setPlayTimer(false)
    clearInterval(interval)
  }

  useEffect(() => {
    if (playTimer) {
      tick()
    }
    return () => clearInterval(interval)
  }, [playTimer])

  let iconPlay = 'icon icon-play'
  let iconPause = 'icon icon-pause hidden'
  if (playTimer) {
    iconPlay += ' hidden'
    iconPause = 'icon icon-pause'
  }
  return (
    <span className="description">
      <button type="button" aria-label="play" className={iconPlay} onClick={play} />
      <button type="button" aria-label="pause" className={iconPause} onClick={stop} />
      <span className="timer-time">{outputTime}</span>
    </span>
  )
}

export default Timer
