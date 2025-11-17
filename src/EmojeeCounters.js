// src/EmojeeCounters.js
import React, { useState, useEffect } from "react";
import Love from "./love.png";
import Sad from "./Sad.png";
import Like from "./Like.png";
import "./App.css";

function EmojeeCounter(props) {
  // state for which image to show
  const [pic, setPic] = useState(Love);
  // state for number of clicks
  const [count, setCount] = useState(0);

  // set the correct image when props.pic changes
  useEffect(() => {
    if (props.pic === "Love") {
      setPic(Love);
    } else if (props.pic === "Like") {
      setPic(Like);
    } else if (props.pic === "Sad" || props.pic === "sad") {
      setPic(Sad);
    }
  }, [props.pic]);

  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>
        {props.pic} <span></span>
        <button onClick={ClickHandle}>
          {count} <img src={pic} alt={props.pic} style={{ width: 30 }} />
        </button>
      </p>
    </div>
  );
}

export default EmojeeCounter;
