// src/components/Palette.js
import React, { useState } from "react";
import "../styles/Palette.css";
import ColorBox from "./ColorBox";

const Palette = ({ colors, onSave, onLoad, onShare }) => {
  const [savedPalettes, setSavedPalettes] = useState(
    JSON.parse(localStorage.getItem("savedPalettes")) || []
  );

  // Function to load a specific palette
  const loadSpecificPalette = (palette) => {
    setSavedPalettes(palette);
    onLoad(palette);
  };

  return (
    <div className="palette">
      <button onClick={onSave}>Save Palette</button>
      <button onClick={onLoad}>Load Last Palette</button>
      <button onClick={onShare}>Share Palette</button>

      <div className="saved-palettes">
        <h3>Saved Palettes</h3>
        {savedPalettes.length === 0 ? (
          <p>No palettes saved yet.</p>
        ) : (
          savedPalettes.map((palette, index) => (
            <div
              key={index}
              className="saved-palette"
              onClick={() => loadSpecificPalette(palette)}
              style={{
                cursor: "pointer",
                marginBottom: "10px",
                background: "#f0f0f0",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {palette.map((color, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: color,
                    width: "20px",
                    height: "20px",
                    display: "inline-block",
                    marginRight: "5px",
                    borderRadius: "50%",
                  }}
                ></div>
              ))}
            </div>
          ))
        )}
      </div>

      <div className="color-box-container">
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Palette;
