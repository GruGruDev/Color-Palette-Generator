// src/components/App.js
import chroma from "chroma-js";
import React, { useState } from "react";
import "../styles/App.css";
import { generateRandomColors } from "../utils/colorUtils";
import Palette from "./Palette";
import SearchBar from "./SearchBar";

const App = () => {
  const [query, setQuery] = useState("");
  const [initialColors, setInitialColors] = useState(generateRandomColors(20));
  const [error, setError] = useState("");

  const handleSearch = (input) => {
    setQuery(input);
    if (input && !isValidColor(input)) {
      setError("Invalid color input! Try again.");
    } else {
      setError("");
    }
  };

  const isValidColor = (color) => {
    try {
      chroma(color);
      return true;
    } catch (e) {
      return false;
    }
  };

  const filteredColors =
    query && isValidColor(query)
      ? chroma.scale([query]).mode("lch").colors(20)
      : initialColors;

  return (
    <div className="App">
      <h1>🎨 Color Palette Generator</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <div className="error-message">{error}</div>}
      <Palette colors={filteredColors} />
    </div>
  );
};

export default App;
