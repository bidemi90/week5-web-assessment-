// Calculator.js
import React, { useState } from "react";
import Button from "./Button";
import me from "./me.jpg"; // add your picture in src folder
import "./Calculator.css";

function KeyPadComponent() {
  const [text1, setText] = useState("");
  const [showPic, setShowPic] = useState(false);

  const ClickHandle = (e) => {
    const val = e.target.value;

    // Clear
    if (val === "C") {
      setText("");
      return;
    }

    // Show picture
    if (val === "show me") {
      setShowPic(true);
      return;
    }

    // Square the entered number
    if (val === "square") {
      // only square if current display is a plain number
      if (text1.trim() === "") {
        alert("Enter a number first");
        return;
      }
      // Try parse number
      const num = Number(text1);
      if (!Number.isNaN(num)) {
        setText(String(num * num));
      } else {
        alert("Cannot square an expression. Enter a number only.");
      }
      return;
    }

    // Evaluate expression
    if (val === "=") {
      try {
        // Use eval carefully, here allowed for simple assignment tasks
        const result = eval(text1);
        setText(String(result));
      } catch (err) {
        alert("Invalid expression");
      }
      return;
    }

    // Default: append value
    setText((prev) => prev + val);
  };

  return (
    <div className="Calculator">
      <div className="screen-row">
        <input type="text" readOnly value={text1} />
      </div>

      <div>
        <Button label="(" ClickHandle={ClickHandle} />
        <Button label="CE" ClickHandle={ClickHandle} />
        <Button label=")" ClickHandle={ClickHandle} />
        <Button label="C" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="1" ClickHandle={ClickHandle} />
        <Button label="2" ClickHandle={ClickHandle} />
        <Button label="3" ClickHandle={ClickHandle} />
        <Button label="+" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="4" ClickHandle={ClickHandle} />
        <Button label="5" ClickHandle={ClickHandle} />
        <Button label="6" ClickHandle={ClickHandle} />
        <Button label="-" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="7" ClickHandle={ClickHandle} />
        <Button label="8" ClickHandle={ClickHandle} />
        <Button label="9" ClickHandle={ClickHandle} />
        <Button label="*" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="." ClickHandle={ClickHandle} />
        <Button label="0" ClickHandle={ClickHandle} />
        <Button label="=" ClickHandle={ClickHandle} />
        <Button label="/" ClickHandle={ClickHandle} />
      </div>

      {/* Additional task buttons */}
      <div style={{ marginTop: 10 }}>
        <Button label="show me" ClickHandle={ClickHandle} />
        <Button label="square" ClickHandle={ClickHandle} />
      </div>

      {/* Show picture when asked */}
      <div style={{ marginTop: 10 }}>
        {showPic && (
          <div>
            <img src={me} alt="me" width="120" />
          </div>
        )}
      </div>
    </div>
  );
}

export default KeyPadComponent;
