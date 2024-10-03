// src/components/App.js
import chroma from "chroma-js";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toastify
import "../styles/App.css";
import { generateRandomColors } from "../utils/colorUtils";
import Palette from "./Palette";
import SearchBar from "./SearchBar";

const App = () => {
  const [query, setQuery] = useState("");
  const [initialColors, setInitialColors] = useState(generateRandomColors(20));

  const handleSearch = (input) => {
    setQuery(input);
  };

  // Function to save the current palette
  const savePalette = () => {
    const palettes = JSON.parse(localStorage.getItem("savedPalettes")) || [];
    palettes.push(initialColors);
    localStorage.setItem("savedPalettes", JSON.stringify(palettes));
    toast.success("Palette saved successfully!"); // Display toast notification
  };

  // Function to load the last saved palette
  const loadPalettes = () => {
    const palettes = JSON.parse(localStorage.getItem("savedPalettes")) || [];
    if (palettes.length > 0) {
      setInitialColors(palettes[palettes.length - 1]); // Load the last saved palette
      toast.info("Loaded the last saved palette!");
    } else {
      toast.error("No saved palettes found!");
    }
  };

  // Function to generate a shareable URL for the current palette
  const sharePalette = () => {
    const url = `${window.location.origin}/?palette=${encodeURIComponent(
      JSON.stringify(initialColors)
    )}`;
    navigator.clipboard.writeText(url);
    toast.success("Palette URL copied to clipboard!"); // Display success toast
  };

  // Filter colors based on user input
  const filteredColors = query
    ? chroma.scale([query]).colors(20)
    : initialColors;

  return (
    <div className="App">
      <h1>🎨 Màu Đây Rồi!</h1>
      <SearchBar onSearch={handleSearch} />
      <Palette
        colors={filteredColors}
        onSave={savePalette}
        onLoad={loadPalettes}
        onShare={sharePalette}
      />
      {/* Toast Container to display toast messages */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;
