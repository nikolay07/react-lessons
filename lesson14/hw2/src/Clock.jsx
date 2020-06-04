import React, { useState, useEffect } from "react";

const getTime = (timezone) => {
  const currentTimeZone = new Date().getTimezoneOffset() / 60;
  const locationTimeZone = new Date(
    new Date().setHours(
      new Date().getHours() + currentTimeZone + timezone
    )
  );
  return locationTimeZone;
};

const Clock = ({ location, offset }) => {
  const [cityTime, setTime] = useState(
    getTime(offset).toLocaleTimeString("en-US")
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getTime(offset).toLocaleTimeString("en-US"));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{cityTime}</div>
    </div>
  );
};

export default Clock;
