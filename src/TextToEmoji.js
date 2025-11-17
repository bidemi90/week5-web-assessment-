import React, { useState } from "react";
import Happy from "./love.png";
import Sad from "./Sad.png";
import Like from "./Like.png";

function TextToEmoji() {
  const [text, setText] = useState("");

  const getImage = () => {
    const value = text.trim().toLowerCase();
    if (value === "happy") return Happy;
    if (value === "like") return Like;
    if (value === "sad") return Sad;
    return null;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type Happy, Like or sad"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label>
        {getImage() ? (
          <img src={getImage()} alt="emoji" width="80" />
        ) : (
          "No emoji yet"
        )}
      </label>
    </div>
  );
}

export default TextToEmoji;
