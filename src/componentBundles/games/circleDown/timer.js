import React, { useState, useEffect, useImperativeHandle } from "react";
import "./timer.css";

const Timer = React.forwardRef((props, ref) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useImperativeHandle(
    ref,
    () => ({
      start: () => {
        setRunning(true);
      },
      stop: () => {
        setRunning(false);
      },
      reset: () => {
        setTime(0);
        setRunning(false);
      },
    }),
    []
  );
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
});

export default Timer;
