import React, { Component } from 'react'
import './clock.scss';

const getTime = (timezone) => {
  const currentTimeZone = new Date().getTimezoneOffset() / 60;
  const locationTimeZone = new Date(new Date().setHours(new Date().getHours() + currentTimeZone + timezone));
  return locationTimeZone;
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      time: getTime(props.zone).toLocaleTimeString('en-US'),
    }
    setInterval(() => {
      this.setState({
        time: getTime(props.zone).toLocaleTimeString('en-US'),
      })
    }, props.interval)
  }
  render () {
    return (
      <div className="clock">
        <div className="clock__location">
            {this.state.location}
        </div>
        <div className="clock__time">
            {this.state.time}
        </div>
      </div>
    )
  }
}

export default Clock;
