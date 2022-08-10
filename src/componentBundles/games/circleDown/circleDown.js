import React, { useMemo, useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import Timer from "./timer";
import RestartButton from "./restartButton";
import "./circleDown.css";

const CircleDown = () => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const initialCircleStyle = useMemo(() => {
    const top = getRandomIntInclusive(10, 80);
    const right = getRandomIntInclusive(1, 90);
    return {
      position: "fixed",
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      border: "solid 1px white",
      top: `${top}%`,
      right: `${right}%`,
      zIndex: "10000",
    };
  }, []);

  const [message, setMessage] = useState(null);
  const [circleStyle, setCircleStyle] = useState(initialCircleStyle);

  const timerRef = useRef();
  const restartButtonRef = useRef();

  const gameOver = () => {
    setMessage("You win!");
    restartButtonRef.current.setRestartButtonStyle({ display: "block" });
    timerRef.current.stop();
  };

  const handleClick = () => {
    if (parseInt(circleStyle.width) === 1) return gameOver();
    const newTop = getRandomIntInclusive(10, 80);
    const newRight = getRandomIntInclusive(1, 90);
    const newWidth = Math.floor(parseInt(circleStyle.width) / 1.5);
    const newHeight = Math.floor(parseInt(circleStyle.height) / 1.5);
    setCircleStyle({
      ...circleStyle,
      top: `${newTop}%`,
      right: `${newRight}%`,
      width: `${newWidth}px`,
      height: `${newHeight}px`,
    });
  };

  const circle = <div style={circleStyle} onClick={handleClick}></div>;

  useEffect(() => {
    timerRef.current.start();
    createRoot(document.querySelector(".restart-game")).render(
      <RestartButton
        ref={restartButtonRef}
        setCircleStyle={setCircleStyle}
        setMessage={setMessage}
        timerRef={timerRef}
        initialCircleStyle={initialCircleStyle}
      />
    );
  }, [initialCircleStyle]);

  return (
    <>
      <Timer ref={timerRef} />
      {message ? <p className="win-message">{message}</p> : circle}
    </>
  );
};

export default CircleDown;
