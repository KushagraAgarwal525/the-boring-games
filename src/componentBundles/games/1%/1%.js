import "./1%.css";
import { getRandomIntInclusive } from "../../../helpers";
import { useState } from "react";

const Square = ({ style, x, y, setScore, next }) => {
  const handleClick = (e) => {
    if (
      Math.abs((e.pageX * 100) / window.innerWidth - x) <=
        (20 * 100) / window.innerWidth &&
      Math.abs((e.pageY * 100) / window.innerHeight - y) <=
        (20 * 100) / window.innerHeight
    ) {
      setScore((score) => {
        return score + 1;
      });
    } else {
      setScore((score) => {
        return score - 1;
      });
    }
    next();
  };

  return <div className="square" style={style} onClick={handleClick}></div>;
};

const Point = ({ style }) => {
  return <div className="point" style={style}></div>;
};

const OnePercent = () => {
  // select random x,y.
  const [x, setX] = useState(getRandomIntInclusive(10, 90));
  const [y, setY] = useState(getRandomIntInclusive(1, 90));
  const [bufferX, setBufferX] = useState(
    getRandomIntInclusive(
      -7500 / window.innerWidth / 2,
      7500 / window.innerWidth / 2
    )
  );
  const [bufferY, setBufferY] = useState(
    getRandomIntInclusive(
      -7500 / window.innerHeight / 2,
      7500 / window.innerHeight / 2
    )
  );

  const initialSquareStyle = {
    width: "80px",
    height: "80px",
    position: "absolute",
    left: `${x + bufferX - 8000 / window.innerWidth / 2}%`,
    top: `${y + bufferY - 8000 / window.innerHeight / 2}%`,
    border: "1px solid white",
    zIndex: "100000",
  };

  const [squareStyle, setSquareStyle] = useState(initialSquareStyle);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(null);

  const [pointStyle, setPointStyle] = useState({
    width: "1px",
    height: "1px",
    position: "absolute",
    left: `${x}%`,
    top: `${y}%`,
    backgroundColor: "transparent",
    zIndex: "100000",
  });

  const next = () => {
    if (count < 9) setCount((count) => count + 1);
    else setMessage(`You scored ${score} points`);
    const nextX = getRandomIntInclusive(10, 90);
    const nextY = getRandomIntInclusive(1, 90);
    setX(nextX);
    setY(nextY);
    const nextBufferX = getRandomIntInclusive(
      -7500 / window.innerWidth / 2,
      7500 / window.innerWidth / 2
    );
    const nextBufferY = getRandomIntInclusive(
      -7500 / window.innerHeight / 2,
      7500 / window.innerHeight / 2
    );
    setBufferX(nextBufferX);
    setBufferY(nextBufferY);

    setSquareStyle({
      ...squareStyle,
      left: `${nextX + nextBufferX - 8000 / window.innerWidth / 2}%`,
      top: `${nextY + nextBufferY - 8000 / window.innerHeight / 2}%`,
    });
    setPointStyle({
      ...pointStyle,
      left: `${nextX}%`,
      top: `${nextY}%`,
    });
  };

  // add circle with height, width 120vh, 120vw to overflow the viewport at x,y.
  // scale down circle to 1 * 1
  // if point x is less than 5 px away from circle, user gets a point
  // Enlarge the to guess dot

  if (message) {
    return <div className="win-message">{message}</div>;
  }

  return (
    <>
      <Square style={squareStyle} x={x} y={y} setScore={setScore} next={next} />
      <Point style={pointStyle} />
    </>
  );
};

export default OnePercent;
