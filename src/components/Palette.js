// src/components/Palette.js
import React from "react";
import "../styles/Palette.css";
import ColorBox from "./ColorBox";

const Palette = ({ colors }) => {
  return (
    <div className="palette">
      <div className="color-box-container">
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Palette;
