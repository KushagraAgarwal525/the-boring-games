import React, { useState, useImperativeHandle } from "react";

const RestartButton = React.forwardRef(
  ({ setCircleStyle, setMessage, timerRef, initialCircleStyle }, ref) => {
    const [restartButtonStyle, setRestartButtonStyle] = useState({
      display: "none",
    });
    useImperativeHandle(ref, () => ({
      setRestartButtonStyle,
    }));
    const handleRestart = () => {
      setMessage(null);
      setCircleStyle(initialCircleStyle);
      setRestartButtonStyle({ ...restartButtonStyle, display: "none" });
      timerRef.current.reset();
      timerRef.current.start();
    };

    return (
      <button onClick={handleRestart} style={restartButtonStyle}>
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25" zoomAndPan="magnify" viewBox="0 0 75 74.999997" height="25" preserveAspectRatio="xMidYMid meet" version="1.0" ><defs><clipPath id="id1"><path d="M 6.136719 0 L 67 0 L 67 73 L 6.136719 73 Z M 6.136719 0 " clipRule="nonzero"/></clipPath></defs><g clipPath="url(#id1)"><path fill="#FFFFFF" d="M 43.84375 0.550781 C 34.777344 4.832031 21.703125 8.511719 8.875 10.394531 C 7.664062 10.574219 6.710938 11.457031 6.4375 12.644531 C 6.164062 13.828125 6.640625 15.039062 7.648438 15.726562 C 13.011719 19.363281 18.230469 23.433594 22.894531 27.570312 C 27.566406 31.707031 31.671875 35.902344 34.816406 39.800781 C 35.648438 40.832031 37.03125 41.179688 38.253906 40.664062 C 39.472656 40.148438 40.1875 38.917969 40.027344 37.605469 L 38.925781 28.605469 C 40.496094 29.054688 41.976562 29.652344 43.371094 30.464844 C 49.003906 33.761719 52.363281 38.539062 52.28125 45.1875 C 52.210938 51.050781 49.25 55.582031 44.574219 58.910156 C 39.015625 62.871094 31.972656 64.101562 25.34375 62.472656 C 18.457031 60.777344 12.609375 57.226562 7.789062 51.984375 C 7.78125 51.976562 7.769531 51.96875 7.761719 51.957031 C 7.425781 51.59375 6.855469 52.03125 7.117188 52.453125 C 8.042969 53.945312 9.023438 55.398438 10.082031 56.800781 C 13.289062 61.050781 16.949219 64.832031 21.410156 67.769531 C 32.378906 75.003906 46.398438 73.917969 56.253906 65.796875 C 62.085938 60.988281 65.503906 54.722656 66.507812 47.242188 C 67.589844 39.171875 65.171875 32.007812 60.3125 25.621094 C 56.253906 20.292969 50.941406 16.585938 44.742188 14.097656 C 43.894531 13.757812 43.03125 13.453125 42.160156 13.167969 L 47.574219 4.792969 C 48.292969 3.679688 48.1875 2.261719 47.3125 1.265625 C 46.4375 0.269531 45.042969 -0.015625 43.84375 0.550781 " fillOpacity="1" fillRule="nonzero"/></g></svg>
        Restart
      </button>
    );
  }
);

export default RestartButton;
