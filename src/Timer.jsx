import React, { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [activeSeconds, setActiveSeconds] = useState(true);

  useEffect(() => {
    let interval = null;

    if (activeSeconds) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!activeSeconds && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [activeSeconds, seconds]);

  const toggleSeconds = () => {
    setActiveSeconds(!activeSeconds);
  };

  return (
    <div className="timer">
      {seconds}
      <button className="stopButton" onClick={toggleSeconds}>
        {activeSeconds ? "Stop" : "Start"}
      </button>
    </div>
  );
}
