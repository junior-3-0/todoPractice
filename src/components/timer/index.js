import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: Date.now(),
      outputTime: null,
      playTimer: false,
    }
  }

  componentDidUpdate(_, prevState) {
    const { time } = this.state
    if (prevState.time !== time) {
      this.tick()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.interval)
  }

  play = () => {
    const { outputTime } = this.state
    let date = Date.now()
    if (outputTime) {
      date = Date.now() - (+outputTime.split(':')[0] * 1000 + +outputTime.split(':')[1] * 1000)
    }
    this.setState({ time: date, playTimer: true })
  }

  tick = () => {
    clearInterval(this.interval)

    const { time } = this.state

    const difference = (Date.now() - time) / 1000

    let seconds = Math.floor(difference % 60)
    let minutes = Math.floor(difference / 60)

    if (seconds < 10) seconds = `0${seconds}`
    if (minutes < 10) minutes = `0${minutes}`

    this.setState({ outputTime: `${minutes}:${seconds}` })

    this.interval = setInterval(this.tick, 1000)
  }

  stop = () => {
    this.setState({ playTimer: false })
    clearInterval(this.interval)
  }

  render() {
    const { outputTime, playTimer } = this.state
    let iconPlay = 'icon icon-play'
    let iconPause = 'icon icon-pause hidden'
    if (playTimer) {
      iconPlay += ' hidden'
      iconPause = 'icon icon-pause'
    }
    return (
      <span className="description">
        <button type="button" aria-label="play" className={iconPlay} onClick={this.play} />
        <button type="button" aria-label="pause" className={iconPause} onClick={this.stop} />
        <span className="timer-time">{outputTime}</span>
      </span>
    )
  }
}
