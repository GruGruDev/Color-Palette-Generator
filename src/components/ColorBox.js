// src/components/ColorBox.js
import React, { useState } from "react";
import "../styles/ColorBox.css";

const ColorBox = ({ color }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={copyToClipboard}
    >
      <div className={`copy-overlay ${copied && "show"}`} />
      <div className="color-content">
        <span className="color-code">{color}</span>
        {copied && <span className="copied-text">Copied!</span>}
      </div>
    </div>
  );
};

export default ColorBox;
